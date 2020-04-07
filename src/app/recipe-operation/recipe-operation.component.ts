import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {  ViewChild } from '@angular/core';

import { MatDialog, MatTable } from '@angular/material';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegisterService } from '../register.service';
import { RecipeOperationService } from '../recipe-operation.service';
@Component({
  selector: 'app-recipe-operation',
  templateUrl: './recipe-operation.component.html',
  styleUrls: ['./recipe-operation.component.css']
})
export class RecipeOperationComponent implements OnInit {
  model = {
    recipe: '',
    brief: '',
    author: '',
    time: '',
    name:'',
    notes:'',
    value:''
  };
  model1 = {
    instr: '',
    img: ''
  };
  constructor(private router:Router,private ls:LoginService,private hc:HttpClient,private rs:RecipeOperationService) { }
  username:String;
  ngOnInit(){this.username=this.ls.username;}
  newDynamic: any = [];
  newDynamic1: any = [];
      submitIngr(user)
      {        
        this.newDynamic.push(user)
      }
      submitInstr(userobj)
      {
        this.newDynamic1.push(userobj)  
      }
      deleteRow(i)
      {
        this.newDynamic.splice(i,1);
      }
      getlen(i)
      {
        let x= (Object.keys(this.newDynamic[i]).length)
        if(x==4)
        return true;
        return false;
      }
      deleteRowI(i)
      {
        this.newDynamic1.splice(i,1);
      }
      getlenI(i)
      {
        let x= (Object.keys(this.newDynamic1[i]).length)
        if(x==2)
        return true;
        return false;
      }      
      submitRecipe(user)
      {
        let dateTime = new Date()
        user['ingrlist']=this.newDynamic
        user['instrlist']=this.newDynamic1
        user['createdBy']=this.username
        user['createdOn']=dateTime
        console.log(user);
        this.rs.addRecipe(user).subscribe((res) => {
          if(res["message"]=="recipe added successfully")
          alert("recipe added successfully")
        })
      }
  
}
