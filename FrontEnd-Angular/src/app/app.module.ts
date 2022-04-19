import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './components/login-componets/login.component';
import { LoginPageComponent } from './routes/login-page/login-page.component';
import { RegistrationComponent } from './routes/register/registration/registration.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginPageComponent,
    RegistrationComponent

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
