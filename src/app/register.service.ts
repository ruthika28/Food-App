import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  //inject http client obj
  constructor(private hc:HttpClient) { }
  //
  doRegister(userObj):Observable<any>
  {
     return this.hc.post('/user/register',userObj)
  }
}
