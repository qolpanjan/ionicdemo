import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ContactDetail} from './contactdetail';

@Component({
  templateUrl: 'build/pages/about/about.html'
})

export class AboutPage {
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
  	},]
  }
  itemClick(item){
  	//点击每一个联系人加载一个新的页面
  	this.navCtrl.push(ContactDetail,{item:item});
  }
}
