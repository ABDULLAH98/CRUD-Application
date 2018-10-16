import { Injectable } from "@angular/core";
import { IonicStorageModule } from '@ionic/storage';
import { NavController, NavParams } from "ionic-angular";
import { HomePage } from '../home/home';
import { Http, Response } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { RegisterFormPage } from '../register-form/register-form';

@Injectable()
export class ServiceApi {

    private url: string = "http://localhost:3000/users";

    constructor(private http: Http) { }


    getData() {
        console.log("Service called");

        //  return this.http.get(this.url)
        //      .map((response: Response) => response.json);
        return this.http.get('http://localhost:3000/users');
    }

    viewDataService(Index) {
        let indexDelete = Index;
        console.log("the index is from service ", indexDelete);
        return this.http.get('http://localhost:3000/users/' + indexDelete);


    }
    

    savedata(userArray) {
        let options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userArray)
        }
        return fetch('http://localhost:3000/users/', options)
            .then((response) => response.json())
    }

    deleteService(Index) {
        let delIndex = Index;
        console.log(delIndex);
        return this.http.delete('http://localhost:3000/users/' + delIndex);
    }

    editService(id, data) {
        console.log("id value from edit service", id);
        let options = {
            method: 'Put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };
        return fetch(`${'http://localhost:3000/users/'}/${id}`, options)
            .then((response) => response.json())
    }

    getSingleData(Index) {
        console.log("get single data called", Index);
        console.log(this.http.get('http://localhost:3000/users/' + Index));
        return this.http.get('http://localhost:3000/users/' + Index);

    }

}