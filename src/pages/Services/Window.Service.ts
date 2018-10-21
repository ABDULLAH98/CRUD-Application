import { Injectable } from "@angular/core";
import { AlertController, ToastController } from "ionic-angular";
import { resolveDefinition } from "@angular/core/src/view/util";

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

    // alert(msg: string){
    //     let alert = this.aletCtrl.create({
    //         title: 'Attention!',
    //         // subTitle: 'empty Value',
    //         message: msg,
    //         buttons: [
    //             {
    //               text: 'Cancel',
    //               role: 'cancel',
    //               handler: () => {
    //                 console.log('Cancel clicked');
    //                 return false;
    //               }
    //             },
    //             {
    //               text: 'OK',
    //               handler: () => {
    //                 console.log('Ok clicked');
    //                 return true;
    //               }
    //             }
    //           ]
    //     });
    //     alert.present();
    // }


    alert = (msg:string)=>{
        return new Promise((resolve, reject)=>{
            let alert = this.aletCtrl.create({
                title: 'Attention!',
                // subTitle: 'empty Value',
                message: msg,
                buttons: [
                    {
                      text: 'Cancel',
                      role: 'cancel',
                      handler: () => {
                        console.log('Cancel clicked');
                        reject(false);
                      }
                    },
                    {
                      text: 'OK',
                      handler: () => {
                        console.log('Ok clicked');
                        resolve(true);
                        
                      }
                    }
                  ]
            });
            alert.present();

        });
    }
}