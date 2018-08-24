import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Ionic2RatingModule } from 'ionic2-rating';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { NewProfilePage } from '../pages/registerUser/registerUser';
import { TeacherRegistrationPage } from '../pages/registerTeacher/registerTeacher';
import { SearchPage } from '../pages/search/search';
import { SchoolPage } from '../pages/schools/schools';
import { LoginPage } from '../pages/login/login';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ConnectionProvider } from '../providers/connection/connection';
import { DistrictProvider } from '../providers/connection/district';
import { UserLoginProvider } from '../providers/connection/userLogin';
import { CrudProvider } from '../providers/crud/crud';




@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    ListPage,
    NewProfilePage,
    TeacherRegistrationPage,
    SearchPage,
    SchoolPage,
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule, 
    Ionic2RatingModule,
    HttpModule


  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage, 
    HomePage,
    ListPage, 
    NewProfilePage,
    TeacherRegistrationPage,
    SearchPage,
    SchoolPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ConnectionProvider,
    DistrictProvider, 
    UserLoginProvider,
    CrudProvider, 
    {provide: ErrorHandler, useClass: IonicErrorHandler}
    
  ]
})
export class AppModule {}
