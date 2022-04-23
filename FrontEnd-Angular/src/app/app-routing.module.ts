import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsComponent } from './components/comments/comments.component';
import { LoginComponent } from './components/login-componets/login.component';
import { MovieApiNodeComponent } from './components/movie-api-node/movie-api-node.component';


import { RatingComponent } from './components/rating/rating.component';

import { LoginPageComponent } from './routes/login-page/login-page.component';
import { MovieApiComponent } from './routes/movie-api/movie-api.component';
import { OnPageComponent } from './routes/onPage/on-page/on-page.component';

const routes: Routes = [
  { path: "", redirectTo: '/welcome', pathMatch: 'full'},
  { path: "welcome", component: OnPageComponent},
  { path: "login", component: LoginComponent},
  { path: "login/allusers", component: LoginComponent},
  { path: "login/id", component: LoginComponent},
  { path: "movie", component: CommentsComponent },
  { path: "rating", component: RatingComponent },
  { path: "movieslist", component: MovieApiNodeComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
