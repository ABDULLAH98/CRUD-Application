import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceApi } from '../Services/api.service';



@IonicPage()
@Component({
  selector: 'page-view',
  templateUrl: 'view.html',
  providers: [ServiceApi]
})
export class ViewPage {

  recievedData:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private serviceApi: ServiceApi) {
  }
  ngOnInit() {
    console.log("view Page loaded");
    this.recievedData = (this.navParams.get('data'));
    // this.serviceApi.viewDataService(index)
    //   .subscribe(
    //     (result:any) => {
    //       this.recievedData = result._body;
    //       this.recievedData = JSON.parse(this.recievedData);
    //       console.log("recieved Data", this.recievedData);

    //     },
    //     error => console.log("Error :: " + error),
    // );
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewPage');
  }

}
