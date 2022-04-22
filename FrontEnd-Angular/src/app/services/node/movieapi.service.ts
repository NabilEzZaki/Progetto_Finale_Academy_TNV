import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieApiInterface } from 'src/app/models/model-node/apiMovie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesApiService {

    private baseURL = 'https://api.themoviedb.org';
    private apiKey = "3949444e64e7a9355250d3b1b5c59bf1";

    constructor( private http : HttpClient) { }

    getMovieList(){
        return this.http.get<MovieApiInterface>(this.baseURL+"/4/list/5?api_key="+this.apiKey);
    } 

    getMovieById(id:number){
      return this.http.get<MovieApiInterface>(this.baseURL+"/3/movie/"+id+"?api_key="+this.apiKey);
    }

    getMovies(){
        return this.http.get<MovieApiInterface>(this.baseURL+"list/2?api_key="+this.apiKey);
    }


}