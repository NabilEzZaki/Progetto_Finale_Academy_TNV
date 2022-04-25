import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MovieData } from 'src/app/models/model-node/dataModel';
import { MoviesApiService } from 'src/app/services/node/movieapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 


  constructor() {  }


 ngOnInit(): void {
      
  }
 

}
