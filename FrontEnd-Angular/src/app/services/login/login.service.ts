import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { LoginInfo } from 'src/app/models/login-model/login-info';
import { RegisterInfo } from 'src/app/models/login-model/register-info';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    "Access-Control-Allow-Origin": "*",
  }),responseType: 'text' as 'json'
};
const httpOptionsLogin = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  


  constructor(private httpClient: HttpClient) { }

  postLogin(user: LoginInfo | null){
    return this.httpClient.post<LoginInfo>('http://localhost:8080/login/access', user);
  }

  }







 






