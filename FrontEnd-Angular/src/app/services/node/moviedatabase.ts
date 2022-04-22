import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { movieDB } from 'src/app/models/movieModel/movieDB';



@Injectable({
    providedIn: 'root'
  })
  export class MovieDataBase {

    constructor( private httpClient : HttpClient) { }

    getMovieId(movie_id: number | null){
        return this.httpClient.get<movieDB>(`http://localhost:5000/movies/${movie_id}`);
      }
      getMoviesList(){
        return this.httpClient.get<movieDB[]>(`http://localhost:5000/movies`);
      }
      postMovie(movie: movieDB){
        return this.httpClient.post<movieDB>(`http://localhost:5000/movies`, movie);
      }
      deleteMovie(movie_id: number | null){
        return this.httpClient.delete<movieDB>(`http://localhost:5000/movies/${movie_id}`);
      }
  }