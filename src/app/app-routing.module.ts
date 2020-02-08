import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { HealthyComponent } from './tags/healthy/healthy.component';
import { VegetarianComponent } from './tags/vegetarian/vegetarian.component';
import { ChickenComponent } from './tags/chicken/chicken.component';
import { DesertsComponent } from './tags/deserts/deserts.component';


const routes: Routes = [{path:'',redirectTo:'home',pathMatch:'full'},
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
