import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/Srvice/firebase.service';
import { SharedService } from 'src/app/Srvice/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  enseignants: any[] = [];

  username = '';
  pass = '';
  trys!: number;

  constructor(private firebaseService: FirebaseService, private router: Router, private share: SharedService) { }

  ngOnInit() {
    this.firebaseService.getEnseignants().then((data) => {
      this.enseignants = data;
    })

    this.trys = 0;
  }




  onSubmit() {
    if (this.username === '' || this.pass === '') {
      alert('Enter your data');
    }
    else {
      
      for (const elem of this.enseignants) {
        if (elem.username === this.username && elem.password === this.pass) {
          this.share.setUser(elem);
          this.router.navigate(['/home']);
          return;
        }
      }

      this.trys++;
      if (this.trys == 3) {
        alert('You have failled 3 times :|\nPlease contact Admin');
        this.router.navigate(['/home']);
      }
      alert("Username or Password is incorrect!\nPlease verify your data :)");
      this.pass = '';
    }
  }

}
