import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryOperationService {

  constructor(private hc: HttpClient) { }
  addCategory(dataObj): Observable<any> {
    return this.hc.post('/category/add',dataObj);
  }
  removeCategory(){

  }
  getCategoryDataList() {
    const parent = this;
    return new Promise(function (fulfilled, rejected) {
      parent.hc.get('/category/get').subscribe(data => {
        fulfilled(data);
      },
        error => {
          rejected(error);
        });
    });
  }
}
