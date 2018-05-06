import { DataserviceProvider } from './../../providers/dataservice/dataservice';
import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  posts :any;
  post = {
    "id": "",
    "title":"",
    "body":"",
  };
  dataSubscribe;
  constructor(public navCtrl: NavController,public dataservice:DataserviceProvider) {
  }

  ngOnInit(){
    this.fetchData(0,10);
  }

  fetchData(startID,limit) {
      console.log("Request"+startID+" Limit:"+limit);
      this.dataSubscribe = this.dataservice.getData(startID,limit).subscribe( data => {
      console.log(data);
      this.posts = data;
    //  this.dataSubscribe.unsubscribe();
      
  });
  }

  AddPost(){
    this.posts.unshift(this.post);
  }
}
