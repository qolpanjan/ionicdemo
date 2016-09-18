import {Component} from '@angular/core';
import {NavController,ViewController,ModalController,AlertController} from 'ionic-angular';
import {ContactPage} from './contact'

@Component({
  templateUrl: 'build/pages/contact/me.html'
})
export class Me {
	user = {name:"",password:"",headface:""};
  	
 
  constructor(private navCtrl: NavController,private modalCtrl:ModalController,private alertCtrl:AlertController) {
  	
  		this.user.name = "";
  		this.user.password = "";
  		this.user.headface = "images/"+this.user.name+".png";

  		if(localStorage.getItem("Logined")=="true"){
  				this.user.headface = "images/"+localStorage.getItem("username")+".png";
  		}else{
  			let modal = this.modalCtrl.create(ContactPage);
  			modal.onDidDismiss(data =>{
  				this.user.headface = "images/"+localStorage.getItem("username")+".png";
  				location.replace(location.href);
  			});
  			 
  			modal.present();
  			
  		}
  }
  
  
  loginout(){
  		localStorage.setItem("Logined","");
  		localStorage.setItem("username","");
  		let modal = this.modalCtrl.create(ContactPage);
  		modal.onDidDismiss(data =>{
  				this.user.headface = "images/"+localStorage.getItem("username")+".png";
  				location.replace(location.href);
  			});	 
  		modal.present();
  }
    //修改名字函数    9月9号5点    阿力木江  模仿微信修改页面
  changename(){
      let alert = this.alertCtrl.create({
        title:'修改昵称',
        inputs:[
          {
            name:"newusername",
            placeholder:"your last name"
          },
        ],
        buttons:[
          {
            text:'取消',
            handler:data => {
              console.log('Cancel cliclde');
            }
          },
          {
            text:'保存',
            handler:data=>{
              console.log('Saved'+data.newusername);
            }
          }
        ]
      });
      alert.present();
  }

    
}
