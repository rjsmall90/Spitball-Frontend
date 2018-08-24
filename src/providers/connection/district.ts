import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { School } from './../../app/component/school'

@Injectable()
export class DistrictProvider {

    public districtAPI = 'https://data.delaware.gov/api/views/wky5-77bt/rows.json?accessType=DOWNLOAD'
    public apiUrl = 'http://localhost:8080/'; 

    constructor(public http: HttpClient) {
            console.log('Hello DistrictProvider Provider');

    }

    getAllSchools() {
        return this.http.get(this.districtAPI)
    }

    parseData(data: any) {
        return data["data"].map(school => school[13]).filter(this.onlyUnique).map(school => new School(school));
    }

    onlyUnique(value, index, self) { 
        return self.indexOf(value) === index;
    }
    
    post(partialPath: string, data: any) {
        return this.http.post(this.apiUrl + partialPath, data);
      }

}