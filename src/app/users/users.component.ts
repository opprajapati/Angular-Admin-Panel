import { Component, OnInit  } from '@angular/core';
import { GetalluserService } from '../services/getalluser.service';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor( private getuser:GetalluserService,private changeDetectorRef: ChangeDetectorRef ,private route:Router) { }
   allUser:any;
   id:any
  ngOnInit(){
   this.getAllUser()
  }
  getAllUser(){
    this.getuser.getAllUser().subscribe((res)=>{
     this.allUser=res
     console.log(this.allUser);
    })
  }
  
  openDialog(){
    this.route.navigate(['home/edituser'])
    console.log("onEditButton")
  }


}
