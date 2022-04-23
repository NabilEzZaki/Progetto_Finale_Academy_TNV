import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieFavorite } from 'src/app/models/model-node/movieDB';



@Injectable({
    providedIn: 'root'
  })
  export class MovieDataBase {

    baseMovieDatabaseURL = ' http://localhost:5000/favoritemovie';

    constructor( private httpClient : HttpClient) { }

    getMovieIdFav(movie_id: number | null){
        return this.httpClient.get<MovieFavorite>(`http://localhost:5000/favoritemovie/${movie_id}`);
      }
      getMoviesFavList(){
        return this.httpClient.get<MovieFavorite[]>(`http://localhost:5000/favoritemovie`);
      }
      postMovieFav(movie: MovieFavorite){
        return this.httpClient.post<MovieFavorite>(`http://localhost:5000/favoritemovie`, movie);
      }
      deleteMovieFav(movie_id: number | null){
        return this.httpClient.delete<MovieFavorite>(`http://localhost:5000/favoritemovie/${movie_id}`);
      }

  }