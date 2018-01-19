import { Component } from '@angular/core';
import {ChildInfoSearchService} from '../services/childinfosearch.service';


@Component({  
    moduleId:module.id,
  selector: 'home',
  templateUrl: 'home.comp.html',
 
  providers: [ChildInfoSearchService]
})
export class HomeComponent 
 {       
         
   posts: ChildInfos[];
   dataList: any;
   

    constructor(private searchService: ChildInfoSearchService){
     
 
      
    }

    selectChildInfo()
    {

    }

     SearchbyNgModal(searchTxt: any)
    { 
         console.log(searchTxt);
         this.searchService.SearchInfo(searchTxt).subscribe(posts => {
                    //console.log(posts[0].HealthInfos[0].VaccinationMappings[0].vaccination.Details);
                   console.log( posts[0] );
                   this.dataList = Array.of(posts[0]);
                })
         
       // console.log( this.childInfo);
    }       

    Search(searchTxt: any)
    { 
       
         this.searchService.SearchInfo(searchTxt.value).subscribe(posts => {
                    //console.log(posts[0].HealthInfos[0].VaccinationMappings[0].vaccination.Details);
                  
                   this.dataList = Array.of(posts)[0];
 
                })
         
       // console.log( this.childInfo);
    }         
    
 }

 interface HealthInfos
 {
     HealthID: number;
     Hospital: string;
     Practitioner: string;
      Height: string;
     Weight: string;
     Comments: number;
      RecordDate: string;
      VaccinationMappingsList: VaccinationMappings[];
   
 }

 interface ChildInfos
 {
    BabyID : number;
    FirstName : string;
    LastName   : string;   
    FatherName : string;
    MotherName : string;
    GaurdianName : string;
    FatherMobile : number;
    MotherMobile : number;
    DOB : Date;       
    PlaceBorn : string;
    BloodGroup : string;
    GovtIDType : string;
    GovtID : string;
    HospitalBorn : string;
    RegistrationDate : Date;
    HealthList: HealthInfos[];
 }

 interface VaccinationMappings
 {    
     VaccinatedOn: Date;    
      vaccination: {
           Details: string;
           Name: string;  
      };
 }

 interface Vaccination
 {    
     Details: string;
      Name: string;  
       VaccinationID: number; 
        scheduledMonths: number;    
   
 }