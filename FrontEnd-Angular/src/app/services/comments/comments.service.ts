
import { CommentsInterface} from 'src/app/models/commentModel'; 

import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class CommentsService {


  private baseURL = 'http://localhost:5293/comments'; //variabile con indirizzo principale chiamata per comemnti

  constructor(private http: HttpClient) { }

  
  getComments() {
    return this.http.get<CommentsInterface>(this.baseURL);
  }

  getComment(id:number) {
    return this.http.get<CommentsInterface>(this.baseURL + "/" + id);
  }

  getUserComments(id: number) {
    return this.http.get<CommentsInterface>(this.baseURL + "?user-id=" + id);
  }
  
  addComment = (userId: number, movieId: number, data: CommentsInterface) => {
    return this.http.post<CommentsInterface>(this.baseURL, {
      "userId": userId,
      "movieId": movieId,
      "comments": data.comment
    }); 
  }
 
  deleteComment(id : number ) {
    return this.http.delete(this.baseURL + "/" + id);
  }
 
  editComment = (data: CommentsInterface) => {
    return this.http.put(this.baseURL + '/' + data.id, {
      "id": data.id,
      "userId": data.userId,
      "movieId": data.movieId,
      "comments": data.comment
    });
  };
}