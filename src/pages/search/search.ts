import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SchoolPage } from './../../pages/schools/schools';
import { CrudProvider } from './../../providers/crud/crud';
import { DistrictProvider } from './../../providers/connection/district';
import { School } from './../../app/component/school'



@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
    listOfSchools: any; 
    filterSchools: any;
    school: School = new School(); 

  constructor(public navCtrl: NavController, public crud: CrudProvider, public dist: DistrictProvider) {
  }
    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.dist.getAllSchools().subscribe(data => this.setData(data))
    }

    setData(data: any) {
        this.listOfSchools = this.dist.parseData(data);
        this.filterSchools = this.listOfSchools;
    }

    getSchool(event?: any) {
        this.filterSchools = this.listOfSchools
        let val = event.target.value;

        if (val && val.trim() != '') {
            this.filterSchools = this.filterSchools.filter((item) => {
             return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }

    }
    
    goToSchoolPage(school: School){
    
    this.crud.post("/schools/post", this.school, after =>  {
        
         });
    this.navCtrl.push(SchoolPage, {
        school: school
    })
    
        


    }



}
