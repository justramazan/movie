import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { movies } from '../../fake-db/movie.mock-data';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url, method, headers, body } = request;

        // wrap in delayed observable to simulate server api call
        return of(null)
            .pipe(mergeMap(handleRoute))
            .pipe(materialize()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
            .pipe(delay(500))
            .pipe(dematerialize());

        function handleRoute() {
            switch (true) {
                case url.endsWith('/getMovies') && method === 'GET':
                    return getMovies();
                case url.match(/\/getMovie\/\d+$/) && method === 'GET':
                    return getMovie();
                case url.match(/\/getMoviesByGenre\/\d+$/) && method === 'GET':
                    return getMoviesByGenre();
                default:
                    // pass through any requests not handled above
                    return next.handle(request);
            }
        }



        function getMovies() {
            return ok(movies);
        }



        function ok(body?) {
            return of(new HttpResponse({ status: 200, body }))
        }


        function getMovie() {
            const result = movies.find(x => x.id == idFromUrl());
            return ok(result);
        }

        function getMoviesByGenre() {
            const movie = movies.find(x => x.id == idFromUrl());
            let genreMovie: any[] = [];
            movie.genres.forEach(element => {
                movies.filter(x => x.genres.some(s => s == element) && x.id != movie.id)
                    .forEach(item => {
                        if(!genreMovie.some(e=>e.id==item.id)){
                            genreMovie.push(item);
                        }
                    });
            });
            return ok(genreMovie);
        }



        function idFromUrl() {
            const urlParts = url.split('/');
            return parseInt(urlParts[urlParts.length - 1]);
        }
    }
}

export const fakeBackendProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};