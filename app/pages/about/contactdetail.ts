import {Component} from '@angular/core';
import {NavController,NavParams} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/about/contactdetail.html'
})

export class ContactDetail {
	  item;
    constructor(params: NavParams){
      this.item = params.data.item;
    }
}
