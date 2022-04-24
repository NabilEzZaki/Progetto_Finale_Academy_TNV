import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  searchMovie(movieTxt : string){
    if(movieTxt.length ==0){
      return;
    }
    console.log(movieTxt)
    this.router.navigate(['search', movieTxt])
  }

}
