import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginInfo } from 'src/app/models/login-model/login-info';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private loginUrl = 'http://localhost:8080/login/access';
  isUserLoggedIn: Partial<LoginInfo> = {};

  constructor( private httpClient: HttpClient ) {}
 

  ngOnInit(): void {
  
  }

  
 
  login(user: NgForm) {
    this.httpClient.post<LoginInfo>(this.loginUrl, user.value).subscribe({
      next: (res) => this.isUserLoggedIn = res,
      error: () => console.log('error')
    });

  }
  
}


