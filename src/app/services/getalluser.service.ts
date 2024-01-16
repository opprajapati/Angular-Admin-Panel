import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetalluserService {

  constructor( private http:HttpClient) { }
  getAllUser(){
  return this.http.get("http://localhost:3000/users")
  }
}
