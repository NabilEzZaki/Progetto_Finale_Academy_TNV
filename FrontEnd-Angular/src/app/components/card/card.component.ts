import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MoviesApiService } from 'src/app/services/node/movieapi.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() movies:any;
  constructor(private httpClient: HttpClient, private serviceApi : MoviesApiService) { }

  ngOnInit(): void {
    
  }

}
