import { Injectable } from "@angular/core";
import { AlertController, ToastController } from "ionic-angular";

@Injectable()

export class WindowService {


    constructor(public toastCtrl: ToastController, public aletCtrl: AlertController) {

    }



    toast(msg: string, time: number = 3000) {
        let toast = this.toastCtrl.create({
            message: msg,
            position: 'middle',
            duration: time
        });
        toast.present();
    }

    alert(msg: string) {
        let alert = this.aletCtrl.create({
            title: 'Attention!',
            // subTitle: 'empty Value',
            message: msg
        });
        alert.present();
    }
}