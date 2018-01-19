import { Component } from '@angular/core';
import {PostsService} from '../services/post.service';

@Component({
    moduleId:module.id,
  selector: 'childinfo',
  templateUrl: 'childinfo.comp.html',
  providers: [PostsService]
})
export class ChildInfoComponent 
 { 
      
          posts: ChildInfos[];

          constructor(private postsService: PostsService)
          {
                this.postsService.getPosts().subscribe(posts => {
                    console.log(posts[0].HealthInfos[0].VaccinationMappings[0].vaccination.Details);
                    this.posts = posts;
                })
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
