import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { movieDB } from 'src/app/models/model-node/movieDB';



@Injectable({
    providedIn: 'root'
  })
  export class MovieDataBase {

    baseMovieDatabaseURL = ' http://localhost:5000/movies';

    constructor( private httpClient : HttpClient) { }

    getMovieIdFav(movie_id: number | null){
        return this.httpClient.get<movieDB>(`http://localhost:5000/movies/${movie_id}`);
      }
      getMoviesFavList(){
        return this.httpClient.get<movieDB[]>(`http://localhost:5000/movies`);
      }
      postMovieFav(movie: movieDB){
        return this.httpClient.post<movieDB>(`http://localhost:5000/movies`, movie);
      }
      deleteMovieFav(movie_id: number | null){
        return this.httpClient.delete<movieDB>(`http://localhost:5000/movies/${movie_id}`);
      }

  }