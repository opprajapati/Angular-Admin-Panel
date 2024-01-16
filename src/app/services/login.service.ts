import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  
  onlogin(data:any){
    console.log("data1",data)
    return this.http.get(`http://localhost:3000/users?userEmail=${data.email}&userPassword=${data.password}`)
  }
}
