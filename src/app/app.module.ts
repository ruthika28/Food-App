import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { SideComponent } from './side/side.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
=======
import { ArticlesComponent } from './articles/articles.component';
import { HealthyComponent } from './tags/healthy/healthy.component';
import { ChickenComponent } from './tags/chicken/chicken.component';
import { VegetarianComponent } from './tags/vegetarian/vegetarian.component';
import { DesertsComponent } from './tags/deserts/deserts.component';
>>>>>>> 56dba4e16436732dbe9dcb21dd7fe2273a51c88f

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    SideComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent
=======
    ArticlesComponent,
    HealthyComponent,
    ChickenComponent,
    VegetarianComponent,
    DesertsComponent
>>>>>>> 56dba4e16436732dbe9dcb21dd7fe2273a51c88f
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
