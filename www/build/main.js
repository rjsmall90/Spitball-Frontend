webpackJsonp([0],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { ConnectionProvider } from '../../providers/connection/connection;
// import { User } from './../../app/component/user';
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = this.navParams.get("user");
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/ryans/Desktop/spitball_frontend/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      User Profile\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding style="background:url(assets/imgs/final_spitball.jpg) no-repeat center;background-size:cover;" id="page10">\n  <ion-list id="userProfile-list11">\n    <ion-item color="none" id="userProfile-list-item8">\n      <ion-avatar item-left>\n        <img src="" />\n      </ion-avatar>\n      <h2 style="color:#000000;text-align:center;">\n        Welcome!\n        <!-- {{user.name}} -->\n      </h2>\n    </ion-item>\n  </ion-list>\n  <ion-card id="userProfile-card24">\n    <ion-list>\n      <ion-item color="none" id="userProfile-list-item25">\n        <ion-icon name="school" item-left></ion-icon>\n        Schools Attended/Attending\n      </ion-item>\n      <div style="width:100%;height:220px;margin:0px 0px;line-height:250px;background-color:#e8ebef;text-align:center;">\n        <i class="icon ion-image" style="font-size:64px;color:#888;vertical-align:middle;"></i>\n      </div>\n      <ion-item id="userProfile-list-item-container13">\n        <div id="userProfile-markdown14" class="show-list-numbers-and-dots">\n          <p style="margin-top:0px;color:#000000;">\n            Past Three Reviews\n          </p>\n        </div>\n      </ion-item>\n      <ion-list id="userProfile-list14">\n        <ion-item color="none" id="userProfile-list-item30">\n          Most Recent\n        </ion-item>\n        <ion-item color="none" id="userProfile-list-item31">\n          Second Most Recent\n        </ion-item>\n        <ion-item color="none" id="userProfile-list-item32">\n          Third Most Recent\n        </ion-item>\n      </ion-list>\n    </ion-list>\n  </ion-card>\n  <ion-list id="userProfile-list15">\n    <ion-item color="none" id="userProfile-list-item36">\n      <ion-icon name="linkedin" item-left></ion-icon>\n      LinkedIn\n    </ion-item>\n    <ion-item color="none" id="userProfile-list-item37">\n      <ion-icon name="link" item-left></ion-icon>\n      Additional Links\n    </ion-item>\n  </ion-list>\n  <button id="userProfile-button8" ion-button color="balanced" full on-click="goToUpdateProfile()">\n    Edit Profile\n  </button>\n</ion-content>'/*ion-inline-end:"/Users/ryans/Desktop/spitball_frontend/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserLoginProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__connection_connection__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UserLoginProvider = /** @class */ (function () {
    function UserLoginProvider(http, conn) {
        this.http = http;
        this.conn = conn;
        console.log('Hello UserLoginProvider Provider');
    }
    UserLoginProvider.prototype.getToken = function () { return this.token; };
    UserLoginProvider.prototype.setToken = function (token) { this.token = token; };
    UserLoginProvider.prototype.login = function (username, password, callback) {
        var url = this.conn.getAPI() + "/login";
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'content-type': 'application/json',
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: header });
        var body = {
            "username": username,
            "password": password
        };
        this.http.post(url, body, options).subscribe(function (result) {
            callback(result);
            //console.log(result.headers.get("authorization"));
        });
    };
    UserLoginProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__connection_connection__["a" /* ConnectionProvider */]])
    ], UserLoginProvider);
    return UserLoginProvider;
}());

//# sourceMappingURL=userLogin.js.map

/***/ }),

/***/ 114:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 156:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 156;

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_schools_schools__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_crud_crud__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_connection_district__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component_school__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SearchPage = /** @class */ (function () {
    function SearchPage(navCtrl, crud, dist) {
        this.navCtrl = navCtrl;
        this.crud = crud;
        this.dist = dist;
        this.school = new __WEBPACK_IMPORTED_MODULE_5__app_component_school__["a" /* School */]();
    }
    SearchPage.prototype.ngOnInit = function () {
        var _this = this;
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.dist.getAllSchools().subscribe(function (data) { return _this.setData(data); });
    };
    SearchPage.prototype.setData = function (data) {
        this.listOfSchools = this.dist.parseData(data);
        this.filterSchools = this.listOfSchools;
    };
    SearchPage.prototype.getSchool = function (event) {
        this.filterSchools = this.listOfSchools;
        var val = event.target.value;
        if (val && val.trim() != '') {
            this.filterSchools = this.filterSchools.filter(function (item) {
                return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    SearchPage.prototype.goToSchoolPage = function (school) {
        this.crud.post("/schools/post", this.school, function (after) {
        });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_schools_schools__["a" /* SchoolPage */], {
            school: school
        });
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"/Users/ryans/Desktop/spitball_frontend/src/pages/search/search.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Search Page\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding style="background:url(assets/imgs/final_spitball.jpg) no-repeat center;background-size:cover;" id="page3">\n    <ion-searchbar \n    placeholder="Enter Teacher Name or School Here" name="" id="searchHomePage-search1"\n    (ionInput)="getSchool($event)"\n    [spellcheck]="true"\n    [(ngModel)]="school.name">\n    </ion-searchbar>\n    <ion-list *ngFor= "let school of filterSchools"  on-click="goToSchoolPage(school)">\n    <ion-list-header>\n        {{school.name}}\n    </ion-list-header>\n</ion-list>\n  <h4 id="searchHomePage-heading2" style="color:#FF0000;"></h4>\n  <form id="searchHomePage-form8">\n    <ion-item id="searchHomePage-textarea1">\n      <ion-label>\n        Choose A District In Your Area!\n      </ion-label>\n      <ion-textarea placeholder=""></ion-textarea>\n    </ion-item>\n  </form>\n  <img src="assets/img/yY6rwyS0DVld9WhuOGwS_map.jpg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n  <div style="width:100%;height:220px;margin:0px 0px;line-height:250px;background-color:#e8ebef;text-align:center;">\n    <i class="icon ion-image" style="font-size:64px;color:#888;vertical-align:middle;"></i>\n  </div>\n  <ion-list id="searchHomePage-list19">\n    <ion-item color="none" id="searchHomePage-list-item10">\n   \n    </ion-item>\n  </ion-list>\n  <ion-list id="searchHomePage-list20">\n    <ion-item color="none" id="searchHomePage-list-item11">\n     \n    </ion-item>\n  </ion-list>\n  <ion-list id="searchHomePage-list21">\n    <ion-item color="none" id="searchHomePage-list-item15">\n      \n    </ion-item>\n    <ion-item color="none" id="searchHomePage-list-item16">\n    \n    </ion-item>\n  </ion-list>\n  <button id="searchHomePage-button10" ion-button color="balanced" full large>\n    Recent Searches\n  </button>\n</ion-content>'/*ion-inline-end:"/Users/ryans/Desktop/spitball_frontend/src/pages/search/search.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__providers_crud_crud__["a" /* CrudProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_crud_crud__["a" /* CrudProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__providers_connection_district__["a" /* DistrictProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_connection_district__["a" /* DistrictProvider */]) === "function" && _c || Object])
    ], SearchPage);
    return SearchPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchoolPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_connection_connection__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component_rating__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component_review__ = __webpack_require__(289);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// declare var google;
var SchoolPage = /** @class */ (function () {
    // @ViewChild('mapsId') mapElement: ElementRef;
    // map: any;
    function SchoolPage(navCtrl, navParams, conn, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.conn = conn;
        this.http = http;
        this.review = new __WEBPACK_IMPORTED_MODULE_5__app_component_review__["a" /* Review */]();
        this.rating = new __WEBPACK_IMPORTED_MODULE_4__app_component_rating__["a" /* Rating */]();
        this.school = this.navParams.get("school");
    }
    SchoolPage.prototype.postReview = function () { };
    SchoolPage.prototype.postRating = function (rate) { };
    SchoolPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-schools',template:/*ion-inline-start:"/Users/ryans/Desktop/spitball_frontend/src/pages/schools/schools.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Rate School/Select Teacher!\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding style="background:url(assets/imgs/final_spitball.jpg) no-repeat center;background-size:cover" id="page14">\n  <h1 id="teacherSelectPage-heading5" style="color:#000000;text-align:center;">\n  {{school.name}}\n  </h1>\n      <div #mapsId id="mapsId">\n        This Is Where The Map Will Go\n      </div>\n  <ion-item color="none" id="teacherSelectPage-list-item52">\n      <h2>\n        School Aggregate Score\n      </h2>\n  </ion-item>\n  \n     <rating\n        [(ngModel)]="rate" \n        id="stars"\n        readOnly="false"\n        max="5"\n        emptyStarIconName="star-outline"\n        halfStarIconName="star-half"\n        starIconName="star"\n        nullable="false"\n        (ngModelChange)="postRating($rate)">\n    </rating>\n\n<ion-item color="white">\n \n    <ion-input id="review" placeholder = "Write A Review (optional)" [(ngModel)]="review.review"></ion-input>\n  </ion-item>\n        <button id="" ion-button color="balanced" full on-click="postReview()">\n          Post Review!\n        </button>\n\n\n</ion-content>'/*ion-inline-end:"/Users/ryans/Desktop/spitball_frontend/src/pages/schools/schools.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_connection_connection__["a" /* ConnectionProvider */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]])
    ], SchoolPage);
    return SchoolPage;
}());

//# sourceMappingURL=schools.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DistrictProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component_school__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DistrictProvider = /** @class */ (function () {
    function DistrictProvider(http) {
        this.http = http;
        this.districtAPI = 'https://data.delaware.gov/api/views/wky5-77bt/rows.json?accessType=DOWNLOAD';
        this.apiUrl = 'http://localhost:8080/';
        console.log('Hello DistrictProvider Provider');
    }
    DistrictProvider.prototype.getAllSchools = function () {
        return this.http.get(this.districtAPI);
    };
    DistrictProvider.prototype.parseData = function (data) {
        return data["data"].map(function (school) { return school[13]; }).filter(this.onlyUnique).map(function (school) { return new __WEBPACK_IMPORTED_MODULE_2__app_component_school__["a" /* School */](school); });
    };
    DistrictProvider.prototype.onlyUnique = function (value, index, self) {
        return self.indexOf(value) === index;
    };
    DistrictProvider.prototype.post = function (partialPath, data) {
        return this.http.post(this.apiUrl + partialPath, data);
    };
    DistrictProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], DistrictProvider);
    return DistrictProvider;
}());

//# sourceMappingURL=district.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return School; });
var School = /** @class */ (function () {
    function School(name) {
        this.name = name;
    }
    return School;
}());

//# sourceMappingURL=school.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_connection_userLogin__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_registerUser_registerUser__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_registerTeacher_registerTeacher__ = __webpack_require__(209);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, formbuilder, userLogin) {
        this.navCtrl = navCtrl;
        this.formbuilder = formbuilder;
        this.userLogin = userLogin;
        this.formgroup = this.formbuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
        this.username = this.formgroup.controls['username'];
        this.password = this.formgroup.controls['password'];
    }
    LoginPage.prototype.sendLoginInfo = function (loginForm) {
        var _this = this;
        this.userLogin.login(loginForm.username, loginForm.password, function (result) {
            if (result.status == 200) {
                console.log("Success!");
                _this.userLogin.setToken(result.headers.get("authorization"));
                console.log(_this.userLogin.getToken());
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
            }
            else {
                console.log("invalid login attempt");
            }
        });
    };
    LoginPage.prototype.goToUserProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
    };
    LoginPage.prototype.goToTeacherRegistration = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_registerTeacher_registerTeacher__["a" /* TeacherRegistrationPage */]);
    };
    LoginPage.prototype.goToUserRegistration = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_registerUser_registerUser__["a" /* NewProfilePage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/ryans/Desktop/spitball_frontend/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Login\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding style="background:url(assets/imgs/final_spitball.jpg) no-repeat center;background-size:cover;" id="page7">\n  <h1 text-center> Spitball!</h1>\n  <form [formGroup]="formgroup" (ngSubmit)="sendLoginInfo(formgroup.value)">\n    \n    <ion-list id="login-list1">\n      <ion-item id="login-input1">\n        <ion-input type="email" placeholder="Email or Display Name" formControlName="username"></ion-input>\n      </ion-item>\n      <ion-item text-center *ngIf="username.hasError(\'required\') && username.touched">\n        <p> *Please enter your e-mail or display name</p>\n      </ion-item>\n\n      <ion-item text-center>\n        <ion-input type="password" placeholder="Password" formControlName="password"></ion-input>\n      </ion-item>\n      <ion-item text-center *ngIf="password.hasError(\'required\') && password.touched">\n        <p> *Please enter your password</p>\n      </ion-item>\n    </ion-list>\n   \n<button id="login-button1" type="submit" ion-button color="calm" full >Log in</button>\n\n    <div class="spacer" style="height:20px;" id="login-spacer1"></div>\n  </form>\n\n<form [formGroup]="loginform" (ngSubmit)="sendLoginInfo(loginForm.value)" *ngIf="loginForm">\n\n    <ion-label fixed>Username</ion-label>\n    <input type="text" name="name" formControlName="username">\n\n    <ion-label fixed>Password</ion-label>\n    <input type="text" name="name" formControlName="password">\n\n    <input type="submit" class="cta-btn filled" value="Submit" [disabled]="!loginForm.valid">\n\n</form>\n\n  <button id="login-button2" ion-button color="positive" small icon-left>\n    <ion-icon name="linkedin"></ion-icon>\n    LinkedIn Login\n  </button>\n  <button id="login-button3" ion-button clear color="light" small style="color:#FFFFFF;">\n               \n  </button>\n  <button id="login-button4" ion-button color="energized" small>\n    <ion-icon name="googleplus"></ion-icon>\n    Google + Login\n  </button>\n  <button id="login-button2" ion-button color="assertive" full small on-click="goToUserRegistration()">\n    Create A New Profile!\n  </button>\n  <button id="login-button5" ion-button color="balanced" full small on-click="goToTeacherRegistration()">\n    Register As An Educator!\n  </button>\n</ion-content>'/*ion-inline-end:"/Users/ryans/Desktop/spitball_frontend/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_connection_userLogin__["a" /* UserLoginProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component_user__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_connection_connection__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewProfilePage = /** @class */ (function () {
    function NewProfilePage(navCtrl, conn) {
        this.navCtrl = navCtrl;
        this.conn = conn;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__app_component_user__["a" /* User */]();
    }
    NewProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-registerUser',template:/*ion-inline-start:"/Users/ryans/Desktop/spitball_frontend/src/pages/registerUser/registerUser.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      New Profile\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding style="background:url(assets/imgs/final_spitball.jpg) no-repeat center;background-size:cover;" id="page11">\n  <form id="newProfile-form4">\n    <ion-list id="newProfile-list17">\n      <ion-item id="newProfile-input3">\n        <ion-label>\n          First Name\n        </ion-label>\n        <ion-input type="text" placeholder="" [(ngModel)]="user.firstName" name="firstName"></ion-input>\n      </ion-item>\n      <ion-item id="newProfile-input4">\n        <ion-label>\n          Last Name\n        </ion-label>\n        <ion-input type="text" placeholder="" [(ngModel)]="user.lastName" name="lastName"></ion-input>\n      </ion-item>\n      <ion-item id="newProfile-input12">\n        <ion-label>\n          E-mail\n        </ion-label>\n        <ion-input type="email" placeholder=""[(ngModel)]="user.email" name="email"></ion-input>\n      </ion-item>\n      <form id="newProfile-form6">\n        <ion-item id="newProfile-toggle4">\n          <ion-label>\n            Are You A Parent?\n          </ion-label>\n          <ion-toggle color="positive" checked="false"></ion-toggle>\n        </ion-item>\n        <ion-item id="newProfile-toggle5">\n          <ion-label>\n            Are You A Student?\n          </ion-label>\n          <ion-toggle color="positive" checked="false"></ion-toggle>\n        </ion-item>\n        <ion-item id="newProfile-input6">\n          <ion-label>\n            Username\n          </ion-label>\n          <ion-input type="text" placeholder="optional" [(ngModel)]="user.username" name="username" required minlength="5" maxlength="8"></ion-input>\n        </ion-item>\n        <div class="spacer" style="width:299.531px;height:12.9688px;" id="newProfile-spacer5"></div>\n        <div id="newProfile-markdown17" class="show-list-numbers-and-dots">\n          <p style="color:#FF0303;font-size:-1px;">\n            If under the age of 13, tell yo momma, or yo daddy ...if he&#39;s still there ...mines wasn&#39;t T^T\n          </p>\n        </div>\n      </form>\n      <ion-item id="newProfile-input5">\n        <ion-label>\n          Password\n        </ion-label>\n        <ion-input type="password" placeholder="" [(ngModel)]="user.password" name="password"></ion-input>\n      </ion-item>\n    </ion-list>\n    <ion-item id="newProfile-input13">\n      <ion-label>\n        Verify Password\n      </ion-label>\n      <ion-input type="password" placeholder="" [(ngModel)]="user.verifyPassword" name="verify password"></ion-input>\n    </ion-item>\n    <div class="spacer" style="width:299.514px;height:55.9757px;" id="newProfile-spacer4"></div>\n    <button id="newProfile-button9" ion-button color="balanced" full on-click="register()">\n      Get Started!\n    </button>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/ryans/Desktop/spitball_frontend/src/pages/registerUser/registerUser.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_connection_connection__["a" /* ConnectionProvider */]])
    ], NewProfilePage);
    return NewProfilePage;
}());

//# sourceMappingURL=registerUser.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
        this.firstName = this.name;
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherRegistrationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component_user__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_connection_connection__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TeacherRegistrationPage = /** @class */ (function () {
    function TeacherRegistrationPage(navCtrl, conn) {
        this.navCtrl = navCtrl;
        this.conn = conn;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__app_component_user__["a" /* User */]();
    }
    TeacherRegistrationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-registerTeacher',template:/*ion-inline-start:"/Users/ryans/Desktop/spitball_frontend/src/pages/registerTeacher/registerTeacher.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Teacher Registration\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page13" style="background:url(assets/imgs/final_spitball.jpg) no-repeat center;background-size:cover;">\n  <form id="teacherRegistration-form10">\n    <ion-list id="teacherRegistration-list25">\n      <ion-item id="teacherRegistration-input8">\n        <ion-label>\n          First Name\n        </ion-label>\n        <ion-input type="text" placeholder="" [(ngModel)]="user.firstName" name="firstName"></ion-input>\n      </ion-item>\n      <ion-item id="teacherRegistration-input11">\n        <ion-label>\n          Last Name\n        </ion-label>\n        <ion-input type="text" placeholder="" [(ngModel)]="user.lastName" name="lastName"></ion-input>\n      </ion-item>\n      <ion-item id="teacherRegistration-input9">\n        <ion-label>\n          Email\n        </ion-label>\n        <ion-input type="email" placeholder="" [(ngModel)]="user.email" name="email"></ion-input>\n      </ion-item>\n       <ion-item id="teacherRegistration-item-select1">\n        <ion-label>\n          State\n        </ion-label>\n        <ion-select> \n             <ion-option>DE</ion-option>\n          <ion-option>PA</ion-option>\n          <ion-option>MD</ion-option>\n        </ion-select>\n        </ion-item>\n      <ion-item id="teacherRegistration-item-select2">\n      <ion-label>\n          School/School District\n      </ion-label>\n        <ion-select> \n            <ion-option>Red Clay</ion-option>\n            <ion-option>Colonial</ion-option>\n            <ion-option>Christiana</ion-option>\n        </ion-select>\n        <!-- <ion-input type="text" placeholder=""></ion-input> -->\n      </ion-item>\n    </ion-list>\n    <div class="spacer" style="height:100px;" id="teacherRegistration-spacer9"></div>\n    <ion-item id="teacherRegistration-input10">\n      <ion-label>\n        Password\n      </ion-label>\n      <ion-input type="password" placeholder="" [(ngModel)]="user.password" name="password"></ion-input>\n    </ion-item>\n    <ion-item id="teacherRegistration-input14">\n      <ion-label>\n        Verify Password\n      </ion-label>\n      <ion-input type="password" placeholder="" [(ngModel)]="user.verifyPassword" name="verify password"></ion-input>\n    </ion-item>\n    <button id="teacherRegistration-button17" ion-button color="stable" block on-click="register()">\n      Sign up\n    </button>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/ryans/Desktop/spitball_frontend/src/pages/registerTeacher/registerTeacher.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_connection_connection__["a" /* ConnectionProvider */]])
    ], TeacherRegistrationPage);
    return TeacherRegistrationPage;
}());

//# sourceMappingURL=registerTeacher.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(231);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic2_rating__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_list_list__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_registerUser_registerUser__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_registerTeacher_registerTeacher__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_search_search__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_schools_schools__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_login_login__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_connection_connection__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_connection_district__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_connection_userLogin__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_crud_crud__ = __webpack_require__(290);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_registerUser_registerUser__["a" /* NewProfilePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_registerTeacher_registerTeacher__["a" /* TeacherRegistrationPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_schools_schools__["a" /* SchoolPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5_ionic2_rating__["a" /* Ionic2RatingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_registerUser_registerUser__["a" /* NewProfilePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_registerTeacher_registerTeacher__["a" /* TeacherRegistrationPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_schools_schools__["a" /* SchoolPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_16__providers_connection_connection__["a" /* ConnectionProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_connection_district__["a" /* DistrictProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_connection_userLogin__["a" /* UserLoginProvider */],
                __WEBPACK_IMPORTED_MODULE_19__providers_crud_crud__["a" /* CrudProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_search_search__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Login', component: __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */] },
            { title: 'Profile', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Search', component: __WEBPACK_IMPORTED_MODULE_5__pages_search_search__["a" /* SearchPage */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/ryans/Desktop/spitball_frontend/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/ryans/Desktop/spitball_frontend/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Rating; });
var Rating = /** @class */ (function () {
    function Rating() {
    }
    return Rating;
}());

//# sourceMappingURL=rating.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Review; });
var Review = /** @class */ (function () {
    function Review() {
    }
    return Review;
}());

//# sourceMappingURL=review.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrudProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__connection_userLogin__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__connection_connection__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the ConnectionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CrudProvider = /** @class */ (function () {
    function CrudProvider(http, conn, userLogin) {
        this.http = http;
        this.conn = conn;
        this.userLogin = userLogin;
        this.apiUrl = 'http://localhost:8080';
        console.log('Hello ConnectionProvider Provider');
    }
    CrudProvider.prototype.get = function (partialPath, callback) {
        var url = this.conn.getAPI() + partialPath;
        var header = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({
            'Authorization': this.userLogin.getToken(),
            'Content-Type': 'application/json'
        });
        console.log(url);
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: header });
        this.http.get(url, options).subscribe(function (result) {
            console.log(result);
            callback(result);
        });
    };
    CrudProvider.prototype.post = function (partialPath, data, callback) {
        var _this = this;
        var url = this.conn.getAPI() + partialPath;
        var header = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({
            'Authorization': this.userLogin.getToken(),
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: header });
        this.http.post(url, data, options).subscribe(function (result) {
            _this.get(partialPath, function (after) {
                callback(data);
            });
        });
    };
    CrudProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__connection_connection__["a" /* ConnectionProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__connection_connection__["a" /* ConnectionProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__connection_userLogin__["a" /* UserLoginProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__connection_userLogin__["a" /* UserLoginProvider */]) === "function" && _c || Object])
    ], CrudProvider);
    return CrudProvider;
    var _a, _b, _c;
}());

//# sourceMappingURL=crud.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/ryans/Desktop/spitball_frontend/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/ryans/Desktop/spitball_frontend/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectionProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ConnectionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ConnectionProvider = /** @class */ (function () {
    function ConnectionProvider(http) {
        this.http = http;
        this.apiUrl = 'http://localhost:8080';
        console.log('Hello ConnectionProvider Provider');
    }
    ConnectionProvider.prototype.setAPI = function (apiUrl) {
        this.apiUrl = apiUrl;
    };
    ConnectionProvider.prototype.getAPI = function () {
        return this.apiUrl;
    };
    ConnectionProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], ConnectionProvider);
    return ConnectionProvider;
}());

//# sourceMappingURL=connection.js.map

/***/ })

},[210]);
//# sourceMappingURL=main.js.map