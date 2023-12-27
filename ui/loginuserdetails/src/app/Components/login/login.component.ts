import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{ 
  signupUsers: any[] = [];
  signupObj:any = {
   username:'',
   email:'',
   password:''
  };
  loginObj: any ={
   username:'',
   email:'',
   password:''
  };
 
  constructor(private router: Router) {}

  redirectToNextPage(): void {
    // Replace '/next-page' with the actual route path you want to navigate to
    this.router.navigate(['/panel']);
  }
 

   ngOnInit(): void {
     const localData = localStorage.getItem('sigunUsers');
     if(localData != null){
       this.signupUsers =JSON.parse(localData);
     }
   }
   onSignup(){
     console.log(this.signupObj);
     this.signupUsers.push(this.signupObj);
     localStorage.setItem('signupUsers',JSON.stringify(this.signupUsers));
     this.signupObj = {
       username:'',
       email:'',
       password:''
      };
   }
   onLogin(){
   const isUserExist= this.signupUsers.find(m => m.username == this.loginObj.username && m.password == this.loginObj.password);
   if(isUserExist != undefined){
     window.location.assign("panel");
     alert('Login Successfully');
   }
   else{
     alert('Wrong Credentials');
     }
    }
   }
 
 
