import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { GenreType, genreType } from '../movie.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
  providers: [MovieService]
})
export class MovieListComponent implements OnInit {

  constructor(private _movieService: MovieService) { }
  selectedGenre: string;
  searchingText: string;

  movies: any[];

  allMovies: any[];

  genres: string[] = ["action", "adventure", "biography", "comedy", "crime"
    , "drama", "history", "mystery", "scifi", "sport", "thriller"];

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this._movieService.getMovies().subscribe(result => {
      this.movies = result;
      this.allMovies = result;
    })
  }

  filter() {
    if (this.searchingText && this.selectedGenre) {
      this.movies = this.allMovies.filter(f => f.genres.some(x => x == this.selectedGenre) && f.name.toLowerCase().includes(this.searchingText.toLowerCase()));
    }
    else {
      if (this.searchingText) {
        this.movies = this.allMovies.filter(f => f.name.toLowerCase().includes(this.searchingText.toLowerCase()));
      }else{
        this.movies = this.allMovies;
      }

      if (this.selectedGenre) {
        this.movies = this.allMovies.filter(f => f.genres.some(x => x == this.selectedGenre));
      }
    }
  }

  clearFilter() {
    this.movies = this.allMovies;
    this.searchingText = '';
    this.selectedGenre = '';
  }

}
