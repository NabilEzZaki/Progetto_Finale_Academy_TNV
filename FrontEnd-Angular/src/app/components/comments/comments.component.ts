import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  constructor(private httpClient: HttpClient, ) { }

  ngOnInit(): void {
  }

  createComment(comment: NgForm) {
    this.httpClient.post(`http://localhost:5293/comments`, comment.value).subscribe({
      next: () => console.log('comment created'),
      error: () => console.log('error')
    });
  }



}
