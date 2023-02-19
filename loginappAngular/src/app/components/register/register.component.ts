import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


success=false;
  constructor(private router:Router ,private userService:UserService) { }
  formData={
fname:'',
lname:'',
address:'',
email:'',
password:''
  }

  ngOnInit(): void {
  }
  register(){
    console.log(this.formData);
    this.userService.putUser(this.formData).subscribe((response:any)=>{
      console.log("successful");
      this.success=true;
    },
    (error:any)=>{
      console.log("error");
      
    }
    )
    
  }

}
