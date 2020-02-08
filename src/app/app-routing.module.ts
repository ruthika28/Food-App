import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { HealthyComponent } from './tags/healthy/healthy.component';
import { VegetarianComponent } from './tags/vegetarian/vegetarian.component';
import { ChickenComponent } from './tags/chicken/chicken.component';
import { DesertsComponent } from './tags/deserts/deserts.component';
import { BrowseComponent } from './browse/browse.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [{path:'',redirectTo:'home',pathMatch:'full'},
{path:'browse', component:BrowseComponent},
{path:'home',component:HomeComponent},
{path:'login',component:LoginComponent},
{path:'articles',component:ArticlesComponent,children:
[{path:'tags/healthy',component:HealthyComponent},
{path:'tags/vegetarian',component:VegetarianComponent},
{path:'tags/chicken',component:ChickenComponent},
{path:'tags/desserts',component:DesertsComponent}]}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
