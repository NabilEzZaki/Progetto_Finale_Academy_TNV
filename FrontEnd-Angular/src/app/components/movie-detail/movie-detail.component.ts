import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieData } from 'src/app/models/model-node/dataModel';
import { MoviesApiService } from 'src/app/services/node/movieapi.service';
import { MovieDataBase } from 'src/app/services/node/moviedatabase';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})

export class MovieDetailComponent implements OnInit {

  @Input() movies:any;
  //movies : MovieData | null = null;
  movieId: number=25;
  isVisible: boolean = true;
  constructor(private httpClient: HttpClient, private serviceApi : MoviesApiService, private router: Router) {  }

 
  ngOnInit(): void {
      this.serviceApi.getMoviePopulares().subscribe(
        {
          next : (res) => this.movies = res
          
        }
      );
  }
       fechaHaceDiasDeHoy(dias:number){
       let hoy=new Date(); 
       let diasMilisegundos = 1000 * 80 * 80 * 64 *dias;
       let fechaPasada=hoy.getTime()-diasMilisegundos;
       return new Date(fechaPasada)
       }

       searchMovie(movieTxt : string){
        if(movieTxt.length ==0){
          return;
        }
        console.log(movieTxt)
        this.router.navigate(['search', movieTxt])
      }
    

  }






