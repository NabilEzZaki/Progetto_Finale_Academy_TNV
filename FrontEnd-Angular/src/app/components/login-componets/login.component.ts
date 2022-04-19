import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginInfo } from 'src/app/models/login-model/login-info';
import { LoginService } from 'src/app/services/login/login.service';
import { AthenticationService } from 'src/app/services/authentication/athentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private loginService : LoginService, private router : Router, private loginAuth : AthenticationService ) { }
 
    
  

  ngOnInit(): void {
   
  }





  

}
