import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './pages/user/register/register.component';
import { NgxSliderComponent } from './testcomponent/ngx-slider/ngx-slider.component';
import { HomeComponent } from './home/home.component';
import { SingleComponent } from './single/single.component';
import { LoginComponent } from './pages/user/login/login.component';
import { SingleuserComponent } from './pages/user/singleuser/singleuser.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NgxSliderComponent,
    HomeComponent,
    SingleComponent,
    LoginComponent,
    SingleuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
