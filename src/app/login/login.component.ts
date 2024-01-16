import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { loginUser } from '../types/login.interface';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private loginservice:LoginService, private route:Router) { }
  ngOnInit(): void {
  }
  loginForm= new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  })

  onLogin(data:any){
     this.loginservice.onlogin(data).subscribe((res)=>{
      console.log(res)
      if(res){
        alert("login Success!")        
      console.log(res)
      }
      else{
        alert("login failed")
      }
     })   
     this.route.navigate(['home/dashboard'])
  }

}
