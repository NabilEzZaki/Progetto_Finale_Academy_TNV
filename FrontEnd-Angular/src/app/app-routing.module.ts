import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsComponent } from './components/comments/comments.component';
import { LoginComponent } from './components/login-componets/login.component';
import { MovieApiComponent } from './components/movie-api/movie-api.component';
import { RatingComponent } from './components/rating/rating.component';

import { LoginPageComponent } from './routes/login-page/login-page.component';
import { OnPageComponent } from './routes/onPage/on-page/on-page.component';

const routes: Routes = [
  { path: "", redirectTo: '/welcome', pathMatch: 'full'},
  { path: "welcome", component: OnPageComponent},
  { path: "login", component: LoginComponent},
  { path: "login/allusers", component: LoginComponent},
  { path: "login/id", component: LoginComponent},
  { path: "movie", component: CommentsComponent },
  { path: "rating", component: RatingComponent },
  { path: "movielist", component: MovieApiComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
