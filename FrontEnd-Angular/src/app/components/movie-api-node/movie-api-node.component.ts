import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MovieData } from 'src/app/models/model-node/dataModel';
import { MoviesApiService } from 'src/app/services/node/movieapi.service';


@Component({
  selector: 'app-movie-api-node',
  templateUrl: './movie-api-node.component.html',
  styleUrls: ['./movie-api-node.component.scss']
})
export class MovieApiNodeComponent implements OnInit {

movieId : number | null = null;
movies : Partial<MovieData> = {};
movieslist : MovieData[] = [];




  constructor(private httpClient: HttpClient, private movieApiService : MoviesApiService) { }

  ngOnInit(): void {
    this.movieApiService.getMovieList().subscribe(
      {
        next: (res) => this.movies = res
      }
    )


    this.movieApiService.getMovieById(this.movieId).subscribe(
      {
        next: (res) => this.movies = res      
      });



  }

}

