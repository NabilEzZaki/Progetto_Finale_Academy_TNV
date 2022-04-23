import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieData } from 'src/app/models/model-node/dataModel';


@Injectable({
  providedIn: 'root'
})
export class MoviesApiService {

    private baseURL = 'https://api.themoviedb.org';
    apiKey : String = "3949444e64e7a9355250d3b1b5c59bf1";

    constructor( private http : HttpClient) { }

    getMovieList(){
        return this.http.get<MovieData>(`https://api.themoviedb.org/3/movie/?api_key=${this.apiKey}&language=it-it`);
    } 

    getMovieById(movieId:number | null){
      return this.http.get<MovieData>(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.apiKey}&language=it-it`);
    }

    getMovies(){
        return this.http.get<MovieData>(this.baseURL+"list/2?api_key="+this.apiKey);
    }


}