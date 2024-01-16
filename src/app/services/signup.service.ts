import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../types/signup.interface';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor( private http:HttpClient) { }
  url="http://localhost:3000/users"
  onSignUp(data:Users){
  return this.http.post(this.url,data)
  }
}
