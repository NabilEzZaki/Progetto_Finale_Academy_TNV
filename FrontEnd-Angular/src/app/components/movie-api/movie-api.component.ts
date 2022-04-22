import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MovieApiInterface } from 'src/app/models/model-node/apiMovie.model';
import { MoviesApiService } from 'src/app/services/node/movieapi.service';

@Component({
  selector: 'app-movie-api',
  templateUrl: './movie-api.component.html',
  styleUrls: ['./movie-api.component.scss']
})
export class MovieApiComponent implements OnInit {

  

  constructor(private httpClient: HttpClient, private movieService: MoviesApiService ) { }

  ngOnInit(): void {
  }

  getMovieList(movie: NgForm) {
    this.httpClient.get('https://www.themoviedb.org/movie', movie.value).subscribe({
      next: () => console.log('lista film'),
      error: () => console.log('error')
    });
  }


}
