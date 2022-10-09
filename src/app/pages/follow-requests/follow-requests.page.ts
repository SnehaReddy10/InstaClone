import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-follow-requests',
  templateUrl: './follow-requests.page.html',
  styleUrls: ['./follow-requests.page.scss'],
})
export class FollowRequestsPage implements OnInit {

  users: any[] = [];
  suggestedUsers: any[] = [];
  requests: any[] = [];

  constructor(
    private navCtrl: NavController,
    private api: ApiService
    ) { }

  ngOnInit() {
    this.users = this.api.users;
    this.requests = this.api.profile.requests;
    this.suggestedUsers = this.api.profile.suggestedPeople;
  }

  removeRequest(user){
    console.log('remove request');
    this.api.profile.suggestedPeople.pop(user.userId);
  }

  sendRequest(user){
    console.log('send request');
    this.api.profile.sentRequests.push(user.userId);
    this.api.profile.suggestedPeople.pop(user.userId);
    this.api.profile.following.push(user.userId);
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

  manageRequests(){
    console.log('Manage requests');
  }

  
  showUserAccount(user){
    console.log('show user account', user);
    this.navCtrl.navigateForward("/user-profile");
  }


}
