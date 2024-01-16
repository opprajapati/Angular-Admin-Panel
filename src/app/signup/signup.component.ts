import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SignupService } from '../services/signup.service';
import { Users } from '../types/signup.interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor( private signservice:SignupService, private route:Router) { }

  ngOnInit(): void {
  }
  signUp=new FormGroup({
    name: new FormControl(),
    gender: new FormControl(),
    email: new FormControl(),
    phone:new FormControl(),
    password:new FormControl()
  }
  )
  onSignUp(data:any){
    console.log(data)
   this.signservice.onSignUp(data).subscribe((result)=>
   console.log(result)
   )
   alert("Registered !")
   this.signUp.reset();
   this.route.navigate(['login'])
  }
}
