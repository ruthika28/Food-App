import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { BrowseComponent } from './browse/browse.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { UserdashboardComponent } from './user/userdashboard/userdashboard.component';
import { RegisterComponent } from './register/register.component';
import { ArticleOperationComponent } from './article-operation/article-operation.component';
import { CategoryOperationComponent } from './category-operation/category-operation.component';
import { RecipeOperationComponent } from './recipe-operation/recipe-operation.component';
import { SecurerouteGuard } from './secureroute.guard';
import { ArticleDisplayComponent } from './article-display/article-display.component';
import { RecipeDisplayComponent } from './recipe-display/recipe-display.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { AdminprofileComponent } from './admin/adminprofile/adminprofile.component';


const routes: Routes = [{path:'',redirectTo:'home',pathMatch:'full'},
{path:'browse', component:BrowseComponent},
{path:'home',component:HomeComponent},
{path:'login',component:LoginComponent},
{path:'admindashboard',component:AdmindashboardComponent},
{path:'admin/adminprofile',component:AdminprofileComponent},
{path:'userdashboard',component:UserdashboardComponent},
{path:'user/register',component:RegisterComponent},
{path:'article-operation',component:ArticleOperationComponent,canActivate:[SecurerouteGuard]},
{path:'article-display/:articletitle',component:ArticleDisplayComponent},
{path:'category-operation',component:CategoryOperationComponent},
{path:'recipe-operation',component:RecipeOperationComponent},
{path:'recipe-display/:recipetitle',component:RecipeDisplayComponent},
{path:'recipe-edit',component:RecipeEditComponent},
{path:'articles',component:ArticlesComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
