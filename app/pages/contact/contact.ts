import {Component} from '@angular/core';
import {NavController,LoadingController,ToastController,ModalController,ViewController} from 'ionic-angular';
import {Register} from './regit';
import {Me} from './me';

@Component({
  templateUrl: 'build/pages/contact/contact.html'
})
export class ContactPage {

	 public user = {
    username:'',
    password:''

  }
  constructor(private navCtrl:NavController,private loadingCtrl: LoadingController,private toastCtrl:ToastController,private modelCtrl:ModalController,private viewCtrl:ViewController) {
  }
 


  login(){
/*
    console.log(this.user.username);
    let loading = this.loadingCtrl.create({
     content:"Loading...",
     duration:3000,
     dismissOnPageChange:true
    });
    loading.present();
    */
    if(this.user.username=='q') {      //用户名不能为空提示
      let alert = this.toastCtrl.create({
      message:'用户名不能为空',
      duration:2000,
      position:"middle"
      });
    alert.present();
    }else if(this.user.password==''){    //密码不能为空提示
      let alert = this.toastCtrl.create({
      message:'密码不能为空不能为空',
      duration:2000,
      position:"middle"
      });
    }else {
      
        console.log(this.user.username);
        let loading = this.loadingCtrl.create({
        content:"正在登录···",
       dismissOnPageChange:true
    });
      loading.present();
      
      if(this.user.username) {
          if(this.user.password=='1'){        //登录成功
               localStorage.setItem("username",this.user.username);
               localStorage.setItem("Logined","true");
               let data = {'username':this.user.username};
                //退出登录页面
                setTimeout(() =>{
                this.viewCtrl.dismiss(this.user.username);
                 },2000);
                //消息进度条
               setTimeout(() =>{
                loading.dismiss();
                 },2000);
               
               //this.navCtrl.push(Me);
           }else{
                 let alert = this.toastCtrl.create({
                message:'你输入的密码不正确',
                duration:2000,
                position:"middle"
                });
                 alert.present();
           }
        }else{
             let alert = this.toastCtrl.create({
                message:'你输入的用户名不存在',
                duration:2000,
                position:"middle"
                });
                alert.present();
        }
     
    }
    
  }

regit(){
  console.log("hello");
  this.navCtrl.push(Register);
}

    
  }

