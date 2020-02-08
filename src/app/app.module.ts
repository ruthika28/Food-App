import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ArticlesComponent } from './articles/articles.component';
import { HealthyComponent } from './tags/healthy/healthy.component';
import { ChickenComponent } from './tags/chicken/chicken.component';
import { VegetarianComponent } from './tags/vegetarian/vegetarian.component';
import { DesertsComponent } from './tags/deserts/deserts.component';
import { BrowseComponent } from './browse/browse.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArticlesComponent,
    HealthyComponent,
    ChickenComponent,
    VegetarianComponent,
    DesertsComponent,
    BrowseComponent,
    LoginComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
