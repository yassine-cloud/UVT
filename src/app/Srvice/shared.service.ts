import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private route : Router) {

   }

   userConnected:boolean=false;
   User:any ;


   setUser(user:any){
    this.User=user;
    this.userConnected=true;
   }

   desc(){
    this.User=null;
    this.userConnected=false;
    this.route.navigate(['/login']);
   }

}
