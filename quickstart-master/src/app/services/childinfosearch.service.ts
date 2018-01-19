import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ChildInfoSearchService{
     url: string;
     obj: any;
 
    constructor(private http: Http)
    {
        
    }

    SearchInfo(id: any)
    {       
        console.log(id);       
        this.url = 'https://smartchildcareapi.azurewebsites.net/api/childinfo/query/' + id;        
        this.obj = this.http.get(this.url).map(res => res.json());         
        return this.obj;
    }

    getPosts()
    {
        return this.http.get('https://smartchildcareapi.azurewebsites.net/api/childinfo/')
        .map(res => res.json());
    }

    
    
}