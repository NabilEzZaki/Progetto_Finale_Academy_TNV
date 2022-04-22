import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieApiInterface, MovieDatabaseInterface } from 'src/app/models/model-node/apiMovie.model';
import { MoviesApiService } from 'src/app/services/node/movieapi.service';

@Component({
  selector: 'app-movie-api',
  templateUrl: './movie-api.component.html',
  styleUrls: ['./movie-api.component.scss']
})
export class MovieApiComponent implements OnInit {

  

  constructor(private movieApi : MoviesApiService, private route: Router) { }

  ngOnInit(): void {
    
  }

 
  
}

  
