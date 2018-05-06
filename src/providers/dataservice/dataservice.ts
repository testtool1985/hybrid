import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";


export interface post {
  id: string;
  title: string;
  body: string;
  
}
/*
  Generated class for the DataserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataserviceProvider {
  
  posts;
  url = "http://jsonplaceholder.typicode.com/posts?_start=";
  constructor(public http: HttpClient) {
    
  }

  getData(startPage:number,limit:number){
    console.log(this.url+startPage+'&_limit='+limit);
    return this.http.get(this.url+startPage+'&_limit='+limit);
  }

}
