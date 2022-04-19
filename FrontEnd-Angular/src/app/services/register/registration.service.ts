import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginInfo } from 'src/app/models/login-model/login-info';


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private registerUrl = "http://localhost:8080/login/adduser";

  constructor(private http : HttpClient) { }
  addUser =(newUser : LoginInfo, username: string, password: string) => {
    const headers=new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization : 'Basic '+ btoa(username+":"+password)});  //btoa= binari to ask
    return this.http.post<LoginInfo>(this.registerUrl +"/", JSON.stringify({
  
    "username": newUser.username,
    "password": newUser.password,
    
    }),{headers})

  }
  
}
