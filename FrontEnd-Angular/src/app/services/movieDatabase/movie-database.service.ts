import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieData } from 'src/app/models/movieModel/dataModel';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseURL = 'http://localhost:3000/dataBase';

  constructor( private http : HttpClient) { }

  getData () {
    return this.http.get<Array<MovieData>>(this.baseURL)
  }

  getEntry( id: number ) {
    return this.http.get<MovieData>(this.baseURL + "/" + id )
  }

  addEntry = (dataBase: MovieData) => {
    return this.http.post<MovieData>(this.baseURL, {
      "id": dataBase.id,
      "name": dataBase.name,
      "cast": dataBase.cast,
      "director": dataBase.director,
      "genre": dataBase.genre,
      "rated": dataBase.rated,
      "reviews": dataBase.reviews,
      "evaluation": dataBase.evaluation,
      "releaseDate": dataBase.releaseDate,
      "user_id": dataBase.user_id,
      "movie_id": dataBase.movie_id,
      "seen": dataBase.seen,
      "must_see": dataBase.must_see,

    });
  };

  deleteEntry( id: number ){
    return this.http.delete(this.baseURL + "/" + id)
  }

  editEntry = (dataBase: MovieData) => {
    return this.http.put(this.baseURL + '/' + dataBase.id, {
      "id": dataBase.id,
      "name": dataBase.name,
      "cast": dataBase.cast,
      "director": dataBase.director,
      "genre": dataBase.genre,
      "rated": dataBase.rated,
      "reviews": dataBase.reviews,
      "evaluation": dataBase.evaluation,
      "releaseDate": dataBase.releaseDate,
      "user_id": dataBase.user_id,
      "movie_id": dataBase.movie_id,
      "seen": dataBase.seen,
      "must_see": dataBase.must_see
    });
  };

}