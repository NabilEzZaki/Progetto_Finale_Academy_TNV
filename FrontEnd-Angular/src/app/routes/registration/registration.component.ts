import { Component, OnInit } from '@angular/core';
import { LoginInfo } from 'src/app/models/login-model/login-info';
import { Route, Router } from '@angular/router';
import { RegistrationService } from 'src/app/services/register/registration.service';
import { LoginService } from 'src/app/services/login/login.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  newUser : LoginInfo;
  username : string;

  usernameOk = true;
  usernameExist = true;



  constructor(private registrationService : RegistrationService, private router : Router, private loginService : LoginService) { }

  ngOnInit(): void {
    this.

  }

}
