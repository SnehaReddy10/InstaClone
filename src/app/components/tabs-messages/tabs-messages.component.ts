import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tabs-messages',
  templateUrl: './tabs-messages.component.html',
  styleUrls: ['./tabs-messages.component.scss'],
})
export class TabsMessagesComponent implements OnInit {

  chat: boolean = true;
  calls: boolean = false;

  constructor(private navCtrl: NavController) { }

  ngOnInit() {}

  chatClicked(){
    this.calls = false;
    this.chat = true;
  }

  callsClicked(){
    this.calls = true;
    this.chat = false;
  }

  requestsClicked(){
    this.navCtrl.navigateForward('message-requests')
  }

}
