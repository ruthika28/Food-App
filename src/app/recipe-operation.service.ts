import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeOperationService {

  constructor(private hc:HttpClient,private ls:LoginService) { }
  
  addRecipe(userObj):Observable<any>
  {
    console.log('addRecipe')
     return this.hc.post('/recipe/add',userObj)
  }
  getRecipe():Observable<any>{
    return this.hc.get('/recipe/get-recipe');
  }
  getRecipeObjByUserName() {
    return this.hc.get(`/recipe/getRecipeByUsername/${this.ls.username}`);
  }
  removeRecipe(id):Observable<any> {
    return this.hc.delete(`/recipe/remove/${id}`);
  }
  deleteRecipes(obj):Observable<any>{
    console.log("body is ",obj);
    return this.hc.put('/recipe/delete-many',obj);
  }

  getTotalRecipes() {
    return this.hc.get(`/recipe/noOfRecipes/${this.ls.username}`);
  }
}
