import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NotaPage } from '../nota/nota';


import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';

// import { DetailProductPage } from '../detail-product/detail-product';
// 
@Component({
  selector: 'Page-Home',
  templateUrl: 'home.html'
})
export class HomePage {
 Items: any[];
  constructor(public loadingCtrl: LoadingController,public navCtrl: NavController , private http:Http) {


     const loader = this.loadingCtrl.create({
    content: "Sabar...!!",
     duration: 50
    });
    loader.present();
    


    this.load();
  }

  load()
  {
    this.http.get('http://localhost/makan/konek/koneksi.php')
    .map(res =>res.json())
    .subscribe((resdata) =>{
      this.Items = resdata;
      console.log(resdata)
    });
  }

   openProductPage(item){    
    // console.log(item);
     this.navCtrl.push(NotaPage,{"param" : item});
}


  
}
