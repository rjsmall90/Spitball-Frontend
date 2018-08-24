import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { User } from './../../app/component/user';
import { HomePage } from './../../pages/home/home';

import { ConnectionProvider } from './../../providers/connection/connection';

@Component({
  selector: 'page-registerUser',
  templateUrl: 'registerUser.html'
})
export class NewProfilePage {

user: User = new User();

  constructor(public navCtrl: NavController, public conn: ConnectionProvider) {
  }

  // register(){
  //   this.conn.post('user_profile/register_user', this.user).subscribe(
  //     data => console.log(data)
  //   );
  //   this.navCtrl.push(HomePage);
  // }

  // }goToUpdateProfile(params){
  //   if (!params) params = {};
  //   this.navCtrl.push(Home);
  // }
}
