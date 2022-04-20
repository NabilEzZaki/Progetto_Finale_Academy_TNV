import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login-componets/login.component';

import { LoginPageComponent } from './routes/login-page/login-page.component';
import { OnPageComponent } from './routes/onPage/on-page/on-page.component';

const routes: Routes = [
  { path: "", redirectTo: '/welcome', pathMatch: 'full'},
  { path: "login", component: LoginPageComponent},
  { path: "login/allusers", component: LoginComponent},
  { path: "login/id", component: LoginComponent},
  { path: "welcome", component: OnPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
