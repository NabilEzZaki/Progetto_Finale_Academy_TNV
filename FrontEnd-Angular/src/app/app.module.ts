import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './components/login-componets/login.component';
import { LoginPageComponent } from './routes/login-page/login-page.component';
import { OnPageComponent } from './routes/onPage/on-page/on-page.component';
import { CommentsComponent } from './components/comments/comments.component';
import { RatingComponent } from './components/rating/rating.component';
import { MovieFavComponent } from './components/movie-fav/movie-fav.component';








@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginPageComponent,
    OnPageComponent,
    CommentsComponent,
    RatingComponent,
    MovieFavComponent,
  
  
   
  
 
  

  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
