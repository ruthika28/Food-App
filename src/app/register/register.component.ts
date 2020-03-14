import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private rs:RegisterService,private route:Router) { }

  ngOnInit() {
  }
  submitForm(userObj)
  {
      //send user obj to registration form
      //console.log(userObj);
      this.rs.doRegister(userObj).subscribe((res)=>{
        //alert(res['message'])
        if(res["message"]=="username already existed")
        {
          alert("username already existed");
        }
        if(res["message"]=="register successful"){
          alert("registered successfully");
          this.route.navigate(["./login"]);
        }
      })  
  }

}
