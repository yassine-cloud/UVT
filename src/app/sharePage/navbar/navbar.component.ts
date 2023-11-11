import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/Srvice/shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(protected share : SharedService){}

  connection :boolean = this.share.userConnected;

  ngOnInit(){

  }
  

  

}
