import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-genres',
  templateUrl: './movie-genres.component.html',
  styleUrls: ['./movie-genres.component.scss'],
  providers: [MovieService]
})
export class MovieGenresComponent implements OnInit {

  constructor(private _movieService: MovieService) { }

  movie: any;
  movies: any[] = [];

  @Input() id: number;

  ngOnInit(): void {
        this._movieService.getMoviesByGenre(this.id).subscribe(result=>{
          this.movies = result;
        })

  }

}
