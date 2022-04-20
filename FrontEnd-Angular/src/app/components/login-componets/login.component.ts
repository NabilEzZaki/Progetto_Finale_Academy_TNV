import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginInfo } from 'src/app/models/login-model/login-info';
import { LoginService } from 'src/app/services/login/login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  allusers: LoginInfo[] = [];
    userId : number | null = null;
    notFound: boolean = false;
    user : LoginInfo | null = null;

  constructor( private loginService : LoginService, private router : Router,  activatedRoute: ActivatedRoute, ) { 
    activatedRoute.params.subscribe(val =>{
      this.userId = +val[`id`]
    })
  }
 
     
  

  ngOnInit(): void {
   this.getData()
  }

  navigate(amount: number) {
  if (this.userId) {
    const userId = this.userId + amount;
    this.userId = userId;
    this.router.navigateByUrl(`/login/${userId}`);
    this.getData();
  }
}

private getData() {
  this.loginService.getUserById(this.userId).subscribe({
    next: (res) => this.user = res,
    error: (err) => this.notFound = true
  })
}

  }
  



