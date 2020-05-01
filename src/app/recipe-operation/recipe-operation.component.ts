import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {  ViewChild } from '@angular/core';

// import { MatDialog, MatTable } from '@angular/material';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegisterService } from '../register.service';
import { RecipeOperationService } from '../recipe-operation.service';
import { RecentActionsService } from '../recent-actions.service';
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
    instr: ''
  };
  
  file:File;
  imgUrl:string|ArrayBuffer="";
  constructor(private router:Router,private ls:LoginService,private hc:HttpClient,private rs:RecipeOperationService,
    private ra:RecentActionsService) { }
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
        let dateTime = new Date()        
      }
      getlenI(i)
      {
        let x= (Object.keys(this.newDynamic1[i]).length)
        if(x==1)
        return true;
        return false;
      }      

      getImageFile(imageInfo:File)
    {
      this.file=imageInfo;
      //create FileReader object to read file content
      let reader=new FileReader();

      //read data of file(image)
      //readAsdatafile is asynchronous operation 
      //we need to wait until the data is read
      reader.readAsDataURL(this.file);

      reader.onload=()=>{
        this.imgUrl=reader.result;
        //this gives blob data
      }
      console.log("image url",this.imgUrl);

      
    }


      submitRecipe(user)
      {
        let action={};
        let dateTime = new Date()
        user['ingrlist']=this.newDynamic
        user['instrlist']=this.newDynamic1
        user['createdBy']=this.username
        user['createdOn']=dateTime
        let fd=new FormData();

        //append file data to fd object

        fd.append("photo",this.file);
        
        //append userobj to fd
        //convert pbject into string
        console.log("above user object in recipe", user);
        fd.append("userObj",JSON.stringify(user));

        this.rs.addRecipe(fd).subscribe((res) => {
          if(res["message"]=="recipe added successfully")
          alert("recipe added successfully")          
          this.router.navigate(['/admindashboard'])
        })
        action['createdBy']=this.username
        action['createdOn']=dateTime
        action['ActionDone']="Recipe Added"    
        this.ra.addAction(action).subscribe((res)=>{
          console.log("added recent action",res)
        })
      }
      cancel() {
        this.router.navigate(['/admindashboard']);
      }
      
  
}
