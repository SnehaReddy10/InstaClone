import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private api: ApiService) { }

  ngOnInit() {
  }

  openRequests(){
    console.log('open request');
    this.navCtrl.navigateForward("/follow-requests");
  }

  addfriend(user){
    console.log('add friend', user);
    this.api.profile.followers.push(user.userId);
    console.log(user.userId);
    this.api.profile.requests.pop(user.userId);
  }

  deleteRequest(user){
    console.log('delete request', user);
    this.api.profile.requests.pop(user.userId);
  }
}
