import { HttpClient } from '@angular/common/http';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { UserLoginProvider } from '../connection/userLogin';

/*
  Generated class for the ConnectionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConnectionProvider {

public apiUrl = 'http://localhost:8080';

  constructor(public http: Http) {
    console.log('Hello ConnectionProvider Provider');
  }

  setAPI(apiUrl: string){
    this.apiUrl = apiUrl;
  }

  getAPI(){
    return this.apiUrl;
  }







}
