import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MovieData } from 'src/app/models/model-node/dataModel';
import { MoviesApiService } from 'src/app/services/node/movieapi.service';
import { MovieDataBase } from 'src/app/services/node/moviedatabase';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  movies : MovieData | null = null;
  movieId: number=25;
  isVisible: boolean = true;

  populares:any[]=[];
  last:any[]=[];
  child:any[]=[];

  constructor(private httpClient: HttpClient, private serviceApi : MoviesApiService) { 
    //this.popularMovies();
 
   }

 
  ngOnInit(): void {
/*
    this.serviceApi.getMovieList().subscribe(
      {
        next: (res) => this.movies = res      
      });
*/
      this.serviceApi.getPopulares().subscribe(
        {
          next : (res) => this.movies = res

        }
      );
      }

/*
      popularMovies(){
        this.serviceApi.getPopulares().subscribe(
        {
          next : (res) => this.populares = res
          //this.populares=resp;
        })
        
      }
     
       fechaHaceDiasDeHoy(dias:number){
       let hoy=new Date(); 
       let diasMilisegundos = 1000 * 60 * 60 * 24 *dias;
       let fechaPasada=hoy.getTime()-diasMilisegundos;
       return new Date(fechaPasada)
       }

*/

  }






