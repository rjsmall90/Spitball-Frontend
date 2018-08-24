import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { User } from './../../app/component/user';
import { ConnectionProvider } from './../../providers/connection/connection';

@Component({
  selector: 'page-registerTeacher',
  templateUrl: 'registerTeacher.html'
})
export class TeacherRegistrationPage {

  user: User = new User();

  constructor(public navCtrl: NavController, public conn: ConnectionProvider) {
  }

  //  register(){
  //   this.conn.post('teacher_service/register', this.user).subscribe(
  //     data => console.log(data)
  //   );
  // }

//   goToTeacherProfile(params){
//     if (!params) params = {};
//     this.navCtrl.push(TeacherProfilePage);
//   }
}
