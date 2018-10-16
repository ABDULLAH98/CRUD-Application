import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { stringify } from '@angular/compiler/src/util';
import { JsonPipe } from '@angular/common';
import { RegisterFormPageModule } from '../register-form/register-form.module';
import { RegisterFormPage } from '../register-form/register-form';
import { ServiceApi } from '../Services/Storage.Service';
import { ViewPage } from '../view/view';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ServiceApi]
})
export class HomePage {

  constructor(public navCtrl: NavController, private serviceApi: ServiceApi) {

  }
  recievedData: any;
  dataEdited: any;
  ngOnInit() {
    this.getDataStream();
  }
  getDataStream(): void {

    this.serviceApi.getData()
      .subscribe(
        result => {
          this.recievedData = result._body;
          this.recievedData = JSON.parse(this.recievedData);

        },
        error => console.log("Error :: " + error),
    )
  }
  viewData(Index) {
    console.log("index value from home page", Index);
    this.navCtrl.push(ViewPage, { indexValue: Index });
  }
  register(variable) {
    console.log("button id is ", variable);

    this.navCtrl.push(RegisterFormPage, { Variable: variable });
  }

  deleteData(DataId) {
    let Index = DataId;
    console.log("delete function called from home.ts");
    console.log(Index);

    this.serviceApi.deleteService(Index).subscribe(() => console.log("user Deleted"));
    //this.navCtrl.push(HomePage);
  }

  


}
