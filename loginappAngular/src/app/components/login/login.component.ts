import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 credential={
  email:'',
  password :'',
  error:false
  
 }
  constructor( private router:Router, private userService :UserService ) { }

  ngOnInit(): void {
  }

  hide = true;
data :any
foo(){
  this.credential.error=false;
  console.log('event');
  
}

  dosub(){
  
  this.userService.getUserById(this.credential.email).subscribe(
    (response:any) =>{
console.log(response);
if(response.email==this.credential.email&&this.credential.password==response.password){
  localStorage.setItem('role', response.role)
  localStorage.setItem('username',this.credential.email)
  
  if(response.role=='User'){
  this.router.navigate(['/user/dashboard'])
  }
  if(response.role=='Admin'){
    this.router.navigate(['/admin/dashboard'])
  }

}
else {
 this.credential.error=true;
  console.log("incorrect password"); 
}
    },
    error =>{
console.log(error);
    }
    
  )

  }
}
