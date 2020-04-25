import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  username:String;
  userLoginStatus:boolean;
  adminLoginStatus:boolean;
  //inject HttpClient
  constructor(private hc:HttpClient) {}
  //a method to make http post  
  doLogin(userObj):Observable<any>
  {
      return this.hc.post('/user/login',userObj);
  }
  doLogout()
  {
    localStorage.removeItem("token");
  }
}
