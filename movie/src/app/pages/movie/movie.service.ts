import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MovieService {


  constructor(private _httpClient: HttpClient) { }


  getMovies(): Observable<any> {
    return this._httpClient.get<any[]>('api/getMovies');
  }


  getMovie(movieId): Observable<any> {
    return this._httpClient.get<any[]>('api/getMovie/' + movieId);
  }

  getMoviesByGenre(id:number): Observable<any> {
    return this._httpClient.get<any[]>('api/getMoviesByGenre/' + id);
  }


}
