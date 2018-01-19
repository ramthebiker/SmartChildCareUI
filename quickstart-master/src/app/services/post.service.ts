import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService{
    constructor(private http: Http)
    {
        console.log("started");
    }

    getPosts()
    {
        return this.http.get('https://smartchildcareapi.azurewebsites.net/api/childinfo/')
        .map(res => res.json());
    }
}