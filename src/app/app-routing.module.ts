import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { MapComponent } from './map/map.component';
import { ChatComponent } from './chat/chat.component';
import { RequestComponent } from './request/request.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ContactComponent } from './contact/contact.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { UsersComponent } from './users/users.component';
import { EdituserComponent } from './edituser/edituser.component';
import { AuthGuard } from './Guards/auth.guard';

const routes: Routes = [ 
  {path:'' ,redirectTo:'/login', pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'register',component:SignupComponent},
  {path:'request',component:RequestComponent},
  {path:'signup',component:SignupComponent},
  {path:'home', component:HomeComponent, children:[
    {path:'dashboard',component:DashboardComponent},
    {path:'users',component:UsersComponent,
    canActivate:[AuthGuard]
    
  },
    {path:'chat',component:ChatComponent},
    {path:'contact',component:ContactComponent},
    {path:'request',component:RequestComponent},
    {path:'profile',component:ProfileComponent},
    {path:'map',component:MapComponent},
    {path:'logout',component:LogoutComponent},
    {path:'edituser',component:EdituserComponent}
  ]},
  {path:'header',component:HeaderComponent},

 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
