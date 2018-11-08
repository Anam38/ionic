import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { LoadingController } from 'ionic-angular';
import { HomePage} from '../home/home';


import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
cartItems: any = [];
  constructor(public loadingCtrl: LoadingController,public navCtrl: NavController, public navParams: NavParams, private http:Http , public storage: Storage) {

   const loader = this.loadingCtrl.create({
    content: "Sabar...!!!",
     duration: 50
    });
    loader.present();

   
   
     this.storage.ready().then( ()=>{
      this.storage.get("contact").then( data =>{
        this.cartItems =  data;

        console.log(this.cartItems);
      })
    });

   }

    oyeah()
  {
        this.navCtrl.push(HomePage);
  }

// ionViewDidLoad() { console.log(this.navParams.get("ca"));}
 

}
