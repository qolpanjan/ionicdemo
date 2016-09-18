import {Component} from '@angular/core';
import {NavController,NavParams} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/chat/chatdetail.html'
})

export class ChatDetail {
	  item;
    constructor(params: NavParams){
      this.item = params.data.item;
    }
}
