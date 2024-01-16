import { Component, OnInit } from '@angular/core';
import { GetalluserService } from '../services/getalluser.service';
import {take } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   topUser:any
  constructor(private getUser:GetalluserService) { }

  ngOnInit(): void {
    this.getTopUser()
  }
getTopUser(){
  this.getUser.getAllUser().subscribe((res)=>{
    this.topUser=res
  })
}
}
