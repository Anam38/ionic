import { Component } from '@angular/core';
import { NavController, NavParams , ToastController} from 'ionic-angular';
import { ContactPage } from '../contact/contact';
import { Storage } from '@ionic/storage';

import { LoadingController } from 'ionic-angular';


/**
 * Generated class for the NotaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-nota',
  templateUrl: 'nota.html',
})
export class NotaPage {
param: any;
  constructor(public navCtrl: NavController,public loadingCtrl: LoadingController, public navParams: NavParams, public storage: Storage,public toastCtrl: ToastController) {
     this.d();
      this.param = this.navParams.get("param");
}

d() {
    const loader = this.loadingCtrl.create({
      content: "Loading ...!!",
      duration: 50
    });
    loader.present();
  }

openProductPage(param){    
    // console.log(item);
      this.storage.get("contact").then( data =>{ 
          if(data == null || data.length==0){
        data=[];
        data.push({

          // param
          "nama": param.nama,
          "harga": param.harga 
        });
  }else{
     let added = 0;
        for(let i=0;i < data.length;i++){
          if(param.id == data[i].param.id){
            console.log("Barang sudah ada");                        
            data[i].harga = parseFloat(data[i].harga) + parseFloat(data[i].param.harga);
            added= 1;
          }
        }
         
      }   
      this.d();
         this.storage.set("contact",this.param).then( () =>{
        console.log("");
        console.log(this.param);
        this.toastCtrl.create({
           message: "Disukai",
           duration: 50

         }).present();  
        })                  
     }); // location.reload();
      
}

}
