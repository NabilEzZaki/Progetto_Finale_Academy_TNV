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

    getMarvelList(){
        return this.http.get<MovieApiInterface>(this.baseURL+"/4/list/5?api_key="+this.apiKey);
    } // cambiando il numero di lista list/4 appaiono altre liste di film

    getMovieById(id:number){
      return this.http.get<MovieApiInterface>(this.baseURL+"/3/movie/"+id+"?api_key="+this.apiKey);
    }

    getMovies(){
      return this.http.get<MovieApiInterface>(this.baseURL+"list/2?api_key="+this.apiKey);
    }
    

    //Restituisce i film in base al titolo o a una porzione di titolo passato come parametro
    getMovieByTitle(ricercaTitolo:string){
      return this.http.get<MovieApiInterface>(this.baseURL+"/3/search/movie?api_key="+this.apiKey+"&query="+ricercaTitolo);
    }
    //https://api.themoviedb.org/3/search/movie?api_key=3949444e64e7a9355250d3b1b5c59bf1&query='title'

}