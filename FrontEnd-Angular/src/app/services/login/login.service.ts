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

  private loginUrl = 'http://localhost:8080/login/';
  private registerUrl = "http://localhost:8080/login/adduser";
  private getIdUrl = "http://localhost:8080/login/{id}";
  private getAllUserUrl = "http://localhost:8080/login/allusers";


  constructor(private httpClient: HttpClient) { }

/*
  public login(usernameAuth: string, passwordAuth: string){
    const headers=new HttpHeaders({
      Authorization : 'Basic '+ btoa(usernameAuth+":"+passwordAuth)});  
    return this.httpClient.get<any>(this.loginUrl + "/", {headers, responseType:'text' as 'json'}).pipe(map(
        userData => {
         sessionStorage.setItem('username',usernameAuth);
         return userData;
        }
      )
      );
  }

 //verifica se l'utente è loggato
 isUserLoggedIn() {
  let user = sessionStorage.getItem('username')
  //console.log(!(user === null))
  return !(user === null)
}


//logout utente
  logOut() {
    sessionStorage.removeItem('username')
  }

  attemptAuth(credentials: LoginInfo): Observable<LoginInfo> {
    return this.httpClient.post<LoginInfo>(this.loginUrl, credentials, httpOptionsLogin);
  }

  getUserIdByUsername(username: String) {
    return this.httpClient.get<LoginInfo>(this.getIdUrl + "/" + username);
  }

  getAll() : Observable<LoginInfo[]> {
    return this.httpClient.get<LoginInfo[]>(`http://localhost:8080/login/allusers`);
  }
  
  getUserById(id : number|null){
    return this.httpClient.get<LoginInfo>(`http://localhost:8080/login/${id}`);
  }


  
  //verificare lista di utenti presenti nel db
  public getUsers(usernameAuth:string, passwordAuth:string){
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization : 'Basic '+ btoa(usernameAuth+":"+passwordAuth)});
    return this.httpClient.get<Array<LoginInfo>>(this.loginUrl + "/", {headers});
    }
/*
  //preleva utente con id 
  public getUsersById(id: number, usernameAuth:string, passwordAuth:string){
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization : 'Basic '+ btoa(usernameAuth+":"+passwordAuth)});
      return this.http.get<LoginInfo>(this.loginUrl + "/" + id, {headers});
    }

    //preleva utente con username
    public getUserByUsername(username : string, usernameAuth:string, passwordAuth:string){
      const headers = new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization : 'Basic '+ btoa(usernameAuth+":"+passwordAuth)});
      return this.http.get<LoginInfo>(this.loginUrl + "/username/" + username, {headers});
    }

    //update dati utente
    updateUser =(userId:number, newUser : LoginInfo, username:string, password:string) => {
      const headers=new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization : 'Basic '+ btoa(username+":"+password)});  //btoa= binari to ask
      return this.http.put<LoginInfo>(this.loginUrl +"/" +userId, JSON.stringify({
      "username": newUser.username,
      "password": newUser.password,
      "enabled": newUser.enabled,
      }),{headers})
    }

    //delete utente
    deleteUser(id: number, usernameAuth:string, passwordAuth:string ){
      const headers = new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization : 'Basic '+ btoa(usernameAuth+":"+passwordAuth)});
      return this.http.delete(this.loginUrl + "/"+id, {headers});
    }
    */

  }







 






