import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NotaPage } from '../nota/nota';
import { LoadingController } from 'ionic-angular';


import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

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
    this.http.get('http://localhost/makan/konek/minum.php')
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
