import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {
  notifications: any;

  constructor(private navCtrl: NavController, private api: ApiService) {
    this.getNotifications();
  }

  ngOnInit() {}

  openRequests() {
    console.log('open request');
    this.navCtrl.navigateForward('/follow-requests');
    console.log('notifs', this.notifications);
  }

  addfriend(user) {
    console.log('add friend', user);
    // this.api.profile.followers.push(user.userId);
    console.log(user.userId);
    // this.api.profile.requests.pop(user.userId);
  }

  deleteRequest(user) {
    console.log('delete request', user);
    // this.api.profile.requests.pop(user.userId);
  }

  followUser(user) {
    console.log(user);
    // this.api.profile.following.push(user.userId);
  }

  getNotifications() {
    this.api.getNotifications().then((x) => {
      this.notifications = x;
      console.log(x);
    });
  }
}
