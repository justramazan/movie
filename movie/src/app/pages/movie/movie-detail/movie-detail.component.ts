import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
  providers:[MovieService]
})
export class MovieDetailComponent implements OnInit {

  constructor(private _movieService: MovieService, private route: ActivatedRoute,private router:Router,private _location:Location) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
   }

  movie: any;

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');

    this._movieService.getMovie(id).subscribe(result => {
      this.movie = result;
    })
  }

  back(){
    this._location.back();
  }


}