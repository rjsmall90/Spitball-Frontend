import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { ConnectionProvider } from '../connection/connection';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserLoginProvider {

  constructor(public http: Http, public conn: ConnectionProvider) {
    console.log('Hello UserLoginProvider Provider');
  }


  private token: string;

  getToken(){return this.token}

  setToken(token: string){this.token = token}
  
  login(username, password, callback){
   
    var url: string = this.conn.getAPI() + "/login";
 
    var header = new Headers({
      'content-type': 'application/json',
    })
 
    let options = new RequestOptions({headers: header})
 
    var body = {
      "username": username,
      "password": password
    };
 
    this.http.post(url, body, options).subscribe( result => {
      callback(result);
      //console.log(result.headers.get("authorization"));
    })
  }

}
