import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { UserLoginProvider } from '../connection/userLogin';
import { ConnectionProvider } from '../connection/connection';

/*
  Generated class for the ConnectionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CrudProvider {

public apiUrl = 'http://localhost:8080';

  constructor(public http: Http, public conn: ConnectionProvider, public userLogin: UserLoginProvider) {
    console.log('Hello ConnectionProvider Provider');
  }

  get(partialPath: string, callback){
    var url: string = this.conn.getAPI() + partialPath;
    var header = new Headers({
      'Authorization': this.userLogin.getToken(),
      'Content-Type': 'application/json'
      
    });

    console.log(url);
    let options = new RequestOptions({headers: header});
 
    this.http.get(url, options).subscribe(result =>{
      console.log(result);
      callback(result);
    })
  }

post(partialPath: string, data: any, callback) {
  var url = this.conn.getAPI() + partialPath; 

  var header = new Headers ({
    'Authorization': this.userLogin.getToken(),
    'Content-Type': 'application/json'
  });
  let options = new RequestOptions({headers: header});

 this.http.post(url, data, options).subscribe( (result : Response) => {
     this.get(partialPath, after => {
        callback(data); 
     })
   })
}






}
