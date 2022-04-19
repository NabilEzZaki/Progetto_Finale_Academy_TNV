import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AthenticationService {

  username = ''
  password = ''
  invalidLogin = false

  constructor(private router: Router, private loginservice: LoginService) { }

  checkLogin() {
    (this.loginservice.login(this.username, this.password).subscribe(
      data => {
        this.router.navigate([''])
        this.invalidLogin = false
      },
      error => {
        this.invalidLogin = true

      }
    )
    );

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.loginservice.isUserLoggedIn())
      return true;

    this.router.navigate(['login']);
    return false;

  }


  
}
