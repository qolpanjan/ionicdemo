import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ChatDetail} from './chatdetail';


@Component({
  templateUrl: 'build/pages/chat/chat.html'
})
export class ChatPage {
  items = [];
 
  constructor(private navCtrl: NavController) {
    
    this.items = [{
      "id":1,
      "name":"张三",
      "contact":"138140001",
      "homw":"南京",
      "about":"Don`t afraid I am from XJ",
      "birthdate":"1994.1.1"
    },
    {
      "id":1,
      "name":"John",
      "contact":"138140001",
      "homw":"北京",
      "about":"Don`t afraid I am from XJ",
      "birthdate":"1994.1.1"
    },
    {
      "id":1,
      "name":"Jeck",
      "contact":"138140001",
      "homw":"上海",
      "about":"Don`t afraid I am from XJ",
      "birthdate":"1994.1.1"
    },
    {
      "id":1,
      "name":"Jerry",
      "contact":"138140001",
      "homw":"新疆",
      "about":"Don`t afraid I am from XJ",
      "birthdate":"1994.1.1"
    },];

}
  itemClick(item){
    //点击每一个联系人加载一个新的页面
    this.navCtrl.push(ChatDetail,{item:item});
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
    
}
