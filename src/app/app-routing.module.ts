import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AboutComponent } from './pages/about/about.component';
import { ClubsComponent } from './pages/clubs/clubs.component';
import { CoursComponent } from './pages/cours/cours.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

const routes: Routes = [
  {path : "home" ,component : HomeComponent},
  {path : "about" ,component : AboutComponent},
  {path : "clubs" ,component : ClubsComponent},
  {path : "cours" ,component : CoursComponent},

  {path : "login" ,component : LoginComponent},
  {path : "sign-up" ,component : SignUpComponent},

  {path : "**" ,component : HomeComponent},

  //{path : "" ,component : HomeComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
