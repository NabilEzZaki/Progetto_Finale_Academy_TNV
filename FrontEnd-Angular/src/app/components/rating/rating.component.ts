import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  createRating(rating: NgForm) {
    this.httpClient.post(`http://localhost:8000/api/movie`, rating.value).subscribe({
      next: () => console.log('rating created'),
      error: () => console.log('error')
    });
  }

}
