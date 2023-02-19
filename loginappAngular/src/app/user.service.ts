import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
@Injectable({
  providedIn: 'root'
})

export class UserService {
  url="http://localhost:8080/user"
  constructor(private http:HttpClient) { }
  putUser(data:any){
    
   return this.http.post(this.url, data)
  }

  getUserById(data:any){

    return this.http.get(`${this.url}/${data}`)
  }
  isAdmin(){
    if(localStorage.getItem('role')=='Admin'){
      return true;
    }
    else {
      return false;
    }
  }

isUser(){
  if(localStorage.getItem('role')=='User'){
    return true;
  }
  else {
    return false;
  }
}


  isLoggedIn(){
    if(localStorage.getItem('username')!=''&&localStorage.getItem('username')!=undefined){
      return true;
    }
    else{
    return false;
  }
  
  }
}
