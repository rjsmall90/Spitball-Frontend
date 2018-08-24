import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { UserLoginProvider } from './../../providers/connection/userLogin';

import { HomePage } from './../../pages/home/home';
import { NewProfilePage } from './../../pages/registerUser/registerUser';
import { TeacherRegistrationPage } from './../../pages/registerTeacher/registerTeacher';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  formgroup: FormGroup;

  username: AbstractControl;
  password: AbstractControl;

  constructor(public navCtrl: NavController,  private formbuilder: FormBuilder, private userLogin: UserLoginProvider) {
  
    this.formgroup=this.formbuilder.group(
      
      {
      username : ['', Validators.required],
      password : ['', Validators.required]
      });

    this.username=this.formgroup.controls['username'];
    this.password=this.formgroup.controls['password'];
  
  }

  sendLoginInfo(loginForm){
        this.userLogin.login(loginForm.username, loginForm.password, result =>{
        if(result.status == 200){
        console.log("Success!");
        this.userLogin.setToken(result.headers.get("authorization"));
        console.log(this.userLogin.getToken());
        this.navCtrl.setRoot(HomePage);


      } else {
        console.log("invalid login attempt");
      }
    });
  }

  goToUserProfile() {
    this.navCtrl.push(HomePage); 
  }

  goToTeacherRegistration(){
    this.navCtrl.push(TeacherRegistrationPage); 
  }

  goToUserRegistration(){
    this.navCtrl.push(NewProfilePage); 
  }
  
}
