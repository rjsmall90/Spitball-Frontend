import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';

//import { ConnectionProvider } from '../../providers/connection/connection;
// import { User } from './../../app/component/user';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public user; 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.user = this.navParams.get("user");
  }


}
