import {Component} from '@angular/core';
import {NavController,ViewController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

 
  constructor(private navCtrl: NavController,private viewCtrl:ViewController) {
  }
  

  /**
  *
  * 页面生命周期
  */
  onPageLoaded(){
    console.log("Home is Loaded");
  }

  onPageWillEnter(){
    //页面初始化
    console.log("Home will enter later!");
  }
  onPageDidEnter(){
    
    console.log("Home is Enter Already!");
  }
  onPageWillLeave(){
    //页面离开之间做的事
    console.log("Home will leave now !");
  }
  onPageDidLeave(){
    console.log("Home did leave already!");
  }
    heart(){
        this.viewCtrl.setContent("favorite");
    }
}
