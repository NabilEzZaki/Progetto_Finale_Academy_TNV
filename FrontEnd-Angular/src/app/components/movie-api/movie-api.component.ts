import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-movie-api',
  templateUrl: './movie-api.component.html',
  styleUrls: ['./movie-api.component.scss']
})
export class MovieApiComponent implements OnInit {

  constructor(private httpClient: HttpClient,  ) { }

  ngOnInit(): void {
  }

  getMovieList(movie: NgForm) {
    this.httpClient.get('https://api.themoviedb.org', movie.value).subscribe({
      next: () => console.log('lista film'),
      error: () => console.log('error')
    });
  }


}
