import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ArticlesComponent } from './articles/articles.component';
import { QuillModule } from 'ngx-quill';
import { HealthyComponent } from './tags/healthy/healthy.component';
import { ChickenComponent } from './tags/chicken/chicken.component';
import { VegetarianComponent } from './tags/vegetarian/vegetarian.component';
import { DesertsComponent } from './tags/deserts/deserts.component';
import { BrowseComponent } from './browse/browse.component';
import { LoginComponent } from './login/login.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { UserdashboardComponent } from './user/userdashboard/userdashboard.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { ArticleOperationComponent } from './article-operation/article-operation.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgbModule, NgbCarousel, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { CategoryOperationComponent } from './category-operation/category-operation.component';
import { RecipeOperationComponent } from './recipe-operation/recipe-operation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecipeDisplayComponent } from './recipe-display/recipe-display.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';


import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';


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
    LoginComponent,
    AdmindashboardComponent,
    UserdashboardComponent,
    RegisterComponent,
    ArticleOperationComponent,
    CategoryOperationComponent,
    RecipeOperationComponent,
    RecipeDisplayComponent,
    RecipeEditComponent
  ],
  imports: [
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    NgbModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    QuillModule.forRoot({
      modules: {
        syntax: false,
        toolbar: [
          ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
          ['blockquote', 'code-block'],

          [{ 'header': 1 }, { 'header': 2 }],               // custom button values
          [{ 'list': 'ordered' }, { 'list': 'bullet' }],
          [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
          [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
          [{ 'direction': 'rtl' }],                         // text direction

          [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
          [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

          [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
          [{ 'font': [] }],
          [{ 'align': [] }],

          ['clean'],                                         // remove formatting button

          ['link', 'image', 'video']                         // link and image, video
        ]
      }
    })
  ],
  providers: [NgbCarousel, NgbCarouselConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
