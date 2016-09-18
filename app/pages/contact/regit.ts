import {Component} from '@angular/core';
import {NavController,ViewController,SqlStorage,Platform,Storage} from 'ionic-angular';
import {SQLite} from 'ionic-native';

@Component({
  templateUrl: 'build/pages/contact/regit.html'
})
export class Register {
	storage: Storage;



	public thisuser ={
		name:"",
		phone:"",
		birthyear:"",
		birthmonth:"",
		birthday:"",
		about:"",
		headface:"",
		region:""
	}


 
  constructor(private navCtrl: NavController,private viewCtrl:ViewController,private platform: Platform) {
  				
  				platform.ready().then(()=>{
  					this.storage = new Storage(SqlStorage,{name: "data.db"});
  					this.storage.query('CREATE TABLE IF NOT EXISTS user(id INTEGER PRIMARY KEY AUTOINCREMENT ,name TEXT,phone TEXT,birthdate TEXT,about TEXT,headface TEXT,region TEXT)').then((data)=>{
  						console.log("SUCCESS!=>"+JSON.stringify(data.res));
  					},(error)=>{
  						console.log("Error"+JSON.stringify(error.err));
  					});
  				});
  }
  
  dissmiss(){
  		//this.ViewCtrl.dissmiss();
  		this.navCtrl.pop();
  }
  backlogin(){

  	let db = new SQLite();
  	db.openDatabase({
  		name:'data.db',
  		location:'default'
  	}).then(()=>{
  		db.executeSql('create table user(name VARCHAR(32))',{}).then(()=>{

  		},(err)=>{
  			console.error('fail',err);
  		});
  	},(err)=>{
  		console.error('fail',err);
  	});
  	this.viewCtrl.dismiss();
  }

    
}
