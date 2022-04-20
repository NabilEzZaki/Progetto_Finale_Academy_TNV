import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieApiInterface } from 'src/app/models/movieModel/apiMovieModel';

@Injectable({
  providedIn: 'root'
})
export class MoviesApiService {

    private baseURL = 'https://api.themoviedb.org';
    private apiKey = "";

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
    //https://api.themoviedb.org/3/search/movie?api_key=d5ac4153b7b34b3ef31b49edd9731e04&query='title'

}