import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ConnectionProvider } from './../../providers/connection/connection';

import { Http, Headers, RequestOptions } from '@angular/http';
import { Rating } from './../../app/component/rating';
import { Review } from './../../app/component/review';


// declare var google;

@Component({
  selector: 'page-schools',
  templateUrl: 'schools.html'
  
})

export class SchoolPage {
    public school; 
    public gMap;

    review: Review = new Review();
    rating: Rating = new Rating();

    // @ViewChild('mapsId') mapElement: ElementRef;
    // map: any;

  constructor(
  public navCtrl: NavController, 
  public navParams: NavParams, 
  public conn: ConnectionProvider, 
  public http: Http  ) {
      this.school = this.navParams.get("school");
  }

  postReview(){}
  

  postRating(rate: any){}

  // ionViewDidLoad () {
  //   this.loadMap();
  // }

  // loadMap () {
  //     const latLng = new google.maps.LatLng(40.758895,-73.985) 
  //     const mapOptions = {
  //       zoom: 13,
	// 	    center: latLng,
	// 	    mapTypeId: google.maps.MapTypeId.ROADMAP
  //     }

  //     this.gMap = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  // }



}