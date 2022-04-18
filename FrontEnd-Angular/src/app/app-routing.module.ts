import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './routes/login-page/login-page.component';

const routes: Routes = [
  { path: "", redirectTo: '/', pathMatch: 'full'},
  {path: 'login', component: LoginPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
