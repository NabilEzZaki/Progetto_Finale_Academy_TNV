import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { movieRating } from 'src/app/models/rating-model/movieRating';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  constructor(private httpClient: HttpClient) { }

  getRating(movie_id : number | null){
    return this.httpClient.get<movieRating>(`http://localhost:8000/api/movie_id/${movie_id}`);
  }

  postValutazione(movieRating: movieRating | null){
    return this.httpClient.post<movieRating>(`http://localhost:8000/api/movie`, movieRating);
  }
  

}
