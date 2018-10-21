import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { stringify } from '@angular/compiler/src/util';
import { JsonPipe } from '@angular/common';
import { RegisterFormPageModule } from '../register-form/register-form.module';
import { RegisterFormPage } from '../register-form/register-form';
import { ServiceApi } from '../Services/api.service';
import { ViewPage } from '../view/view';
import { WindowService } from '../Services/Window.Service';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ServiceApi,WindowService]
})
export class HomePage {

  constructor(public navCtrl: NavController, private serviceApi: ServiceApi, private window: WindowService) {

  }
  recievedData: any;
  dataEdited: any;
  ngOnInit() {
    console.log("data got");
    this.getDataStream();
  }
  getDataStream(): void {

    this.serviceApi.getData()
      .subscribe(
        (result:any) => {
          this.recievedData = result._body;
          this.recievedData = JSON.parse(this.recievedData);

        },
        error => console.log("Error :: " + error),
    )
  }
  viewData(data) {
    console.log("item value from home page", data);
    this.navCtrl.push(ViewPage, { "data": data });
  }
  register(Data) {
    console.log("button id is ", Data);

    this.navCtrl.push(RegisterFormPage, { Variable: Data });
  }

  deleteData(DataId:number, index:number) {
    // let id = DataId;/
    console.log("delete function called from home.ts");
    console.log(DataId);
    this.window.alert('Are you sure').then(
      ()=>{this.serviceApi.deleteService(DataId).subscribe((response) => {
        console.log("user Deleted",response)
        if(response.ok == true){
          this.window.toast("deletion successful");
          this.recievedData.splice(index,1);
        }
      });},
      ()=>{}
    );




    // this.serviceApi.deleteService(DataId).subscribe((response) => {
    //   console.log("user Deleted",response)
    //   if(response.ok == true){
    //     this.window.toast("deletion successful");
    //     this.recievedData.splice(index,1);
    //   }
    // });
    //this.navCtrl.push(HomePage);
  }

  


}
