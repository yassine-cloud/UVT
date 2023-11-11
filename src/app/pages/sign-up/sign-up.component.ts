import { Component, booleanAttribute } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FirebaseService } from 'src/app/Srvice/firebase.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  constructor (private fireService : FirebaseService ,private router : Router ){}

  Cpassword='';
  Users:any[]=[];

  newUser:any = {
    nom: '',
    prenom: '',
    tel: '',
    mail: '',
    username: '',
    password:''
  }

  ngOnInit() {
    this.fireService.getEnseignants().then((data) => {
      this.Users = data;
    })

  }

  
  show :boolean = true;

  next( ){
    if ( this.newUser.username ==='' || this.newUser.password ==='' || this.Cpassword ==='' || this.Cpassword!== this.newUser.password ){
      alert("verify your data");
    }
    else {
      if(this.searchUser(this.newUser.username)){
        this.newUser.username='';
        this.newUser.password='';
        this.Cpassword='';
        alert("there is an user with the same Username :\\\nPlease change it! ");
      }
      else this.show = !this.show;
    }
  }


  

  onSubmit(){

    if ( this.newUser.nom ==='' || this.newUser.prenom ==='' || this.newUser.mail ==='' ){
      alert("check fields");
    }
    else {
      this.fireService.addEnseignant(this.newUser);
      this.router.navigate(['/login']);

    }

     
  }

  searchUser(data:string):boolean{
    for (const user of this.Users) {
      if(user.username.toUpperCase() ===data.toUpperCase()) return true;
    }
    return false;
  }


/*
id: enseignantData['ID'],
        nom: enseignantData['nom'],
        prenom: enseignantData['prenom'],
        tel: enseignantData['tel'],
        mail: enseignantData['mail'],
        username: enseignantData['username'],
        password: enseignantData['password'],

*/


}
