import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceApi } from '../Services/Storage.Service';
import { WindowService } from '../Services/Window.Service';
import { variable } from '@angular/compiler/src/output/output_ast';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-register-form',
  templateUrl: 'register-form.html',
  providers: [ServiceApi, WindowService]
})
export class RegisterFormPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private serviceApi: ServiceApi, private window: WindowService) {
  }
  myUser = { id: "", name: "", last_name: "", father_name: "", address: "", mobileNumber: "", emailId: "", gender: "" }

  recievedData: any = [];
  show: boolean;
  ngOnInit() {

    var buttonVariable = (this.navParams.get('Variable'));
    console.log("button variable ", buttonVariable);
    if (buttonVariable != 'create') {
      this.show = true;
      console.log("button variable form register page", buttonVariable);
      this.serviceApi.getSingleData(buttonVariable)
        .subscribe(
          result => {
            this.recievedData = result._body;
            this.recievedData = JSON.parse(this.recievedData);
            this.myUser = this.recievedData;
            console.log("array", this.recievedData);

          },
          error => console.log("Error :: " + error),
      )
    }




  }
  submitForm() {
    console.log(this.myUser);
    if (this.myUser.id.trim() == "") {
      // this.firstAletController();
      this.window.toast('Enter a valid Id');
    }
    else if (this.myUser.name.trim() == "") {
      // this.firstAletController();
      this.window.toast('Enter a valid name');
    }
    else if (this.myUser.last_name.trim() == "") {
      // this.firstAletController();
      this.window.toast('Enter a valid Last name');
    }
    else if (this.myUser.father_name.trim() == "" || this.myUser.father_name.length < 10) {
      // this.secondAlertcont();
      this.window.toast('Enter a valid Father Name');
    }
    else if (this.myUser.address.trim() == "" || this.myUser.address.length < 15) {
      this.window.toast('Enter a valid Address');
    }
    else if (this.myUser.mobileNumber.trim() == "" || this.myUser.mobileNumber.length < 10) {
      this.window.toast('Enter a valid Mobile Number');
    }
    else if (this.myUser.emailId.trim() == "") {
      this.window.toast('Enter a valid Email Id');
    }
    else if (this.myUser.gender.trim() == "" ) {
      this.window.toast('Enter a valid Gender');
    }

    else {
      this.serviceApi.savedata(this.myUser);

    }
    this.navCtrl.push(HomePage);
  }

  updateData() {
    let id = (this.navParams.get('Variable'));
    console.log("update data id", id);
    this.serviceApi.editService(id, this.myUser);
    this.navCtrl.push(HomePage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterFormPage');
  }

}
