import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { LoginInfo } from 'src/app/models/login-model/login-info';
import { RegisterInfo } from 'src/app/models/login-model/register-info';

/*
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
}; */
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginUrl = "http://localhost:8080/login";
  private registerUrl = "http://localhost:8080/login/adduser";
  private getIdUrl = "http://localhost:8080/login/id";
  private getAllUserUrl = "http://localhost:8080/login/";

  constructor(private http: HttpClient) { }


  public login(usernameAuth: string, passwordAuth: string){
    const headers=new HttpHeaders({
      Authorization : 'Basic '+ btoa(usernameAuth+":"+passwordAuth)});  //btoa= binari to ask
    return this.http.get<any>(this.loginUrl + "/", {headers, responseType:'text' as 'json'}).pipe(map(
        userData => {
         sessionStorage.setItem('username',usernameAuth);
         return userData;
        }
      )
      );
  }

  logOut() {
    sessionStorage.removeItem('username')
  }

  }






  /*
  attemptAuth(credentials: LoginInfo): Observable<Response> {
    return this.http.post<Response>(this.loginUrl, credentials, httpOptionsLogin);
  }
  signUp(info: RegisterInfo): Observable<string> {
    return this.http.post<string>(this.registerUrl, info, httpOptions);
  }
  getUserIdByUsername(username: String) {
    return this.http.get<any>(this.getUserIdByUsername + "/" + username);
  }
  getAll() {
    return this.http.get<any>(this.getAllUserUrl);
  }*/






