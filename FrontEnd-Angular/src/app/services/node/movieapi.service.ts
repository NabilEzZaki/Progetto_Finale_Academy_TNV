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
        return this.http.get<MovieData[]>(`https://api.themoviedb.org/3/list/3?api_key=3949444e64e7a9355250d3b1b5c59bf1`);
    } 

    getMovieById(movieId:number | null){
      return this.http.get<MovieData>(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.apiKey}&language=it-it`);
    }

    getMovies(){
        return this.http.get<MovieData>(this.baseURL+"list/2?api_key="+this.apiKey);
    }

    //https://api.themoviedb.org/3/movie/550?api_key=3949444e64e7a9355250d3b1b5c59bf1

    getPopulares(){
      //let url=`${this.urlMovieDB}/movie/550?api_key=${this.apiKey}&callback=JSONP_CALLBACK`//
      return this.http.get<MovieData>(`https://api.themoviedb.org/3/movie/popular?api_key=3949444e64e7a9355250d3b1b5c59bf1&language=it-it&page=1`)
     
    }

    searchMovie(movie:string){
     /* let url=`${this.urlMovieDB}/search/movie?api_key=${this.apiKey}&language=es&query=
      ${movie}&page=1&callback=JSONP_CALLBACK`
       return this.jsonp.get(url).pipe(map(res=>res.json()))*/

       return this.http.get<MovieData>(`https://api.themoviedb.org/3/search/movie?api_key=3949444e64e7a9355250d3b1b5c59bf1&language=it-it&query=${movie}`)
    }
  



}