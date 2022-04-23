import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { movieDB } from 'src/app/models/model-node/movieDB';
import { MovieDataBase } from 'src/app/services/node/moviedatabase';


@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  favorite : movieDB[] = [];
  constructor(private httpClient: HttpClient, private serviceBackEnd : MovieDataBase) { }

  ngOnInit(): void {
    this.serviceBackEnd.getMoviesFavList().subscribe({
      next: (res) => this.favorite = res,
      error: () => console.log('error')
    })
  }

  createRating(rating: NgForm) {
    this.httpClient.post(`http://localhost:8000/api/movie`, rating.value).subscribe({
      next: () => console.log('rating created'),
      error: () => console.log('error')
    });
  }

}
