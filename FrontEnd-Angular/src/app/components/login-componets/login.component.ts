import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private loginService : LoginService, private router : Router) { }
 
  

  ngOnInit(): void {
   
  }

  login(loginForm: NgForm) {
    console.log(loginForm.value);
  }



/*
  createUser(loginForm: NgForm){
    this.httpClient.post(`http://localhost:8080/login/adduser `, loginForm.value).subscribe({
      next: () => console.log('utente creato'),
      error: () => console.log('error')
      
    });
  }

 /* login() {
    this.loginSer.authenticate(this.credentials, () => {
        this.router.navigateByUrl('/');
    });
    return false;
  }*/

  

}
