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
  suggestedUsers: any;
  requestIds: any;
  currentUser: any;
  requests: any;
  allUsers: any;
  isFollowing: any;
  followingList: any;
  sentRequests: any;

  constructor(private navCtrl: NavController, private api: ApiService) {
    this.requests = [];
    this.getCurrentUser();
    this.getFollowingList();
    this.getSentRequests();
    this.getAllUsers();
    setTimeout(() => {
      this.getFollowRequest();
    }, 100);
  }

  ngOnInit() {}

  removeRequest(user) {}

  sendRequest(user) {}

  addfriend(userId: string) {
    this.api.addFollower(userId);
    this.api.deleteFollowRequest(userId);
    window.location.reload();
  }

  deleteRequest(userId: string) {
    this.api.requestUserToFollow(userId);
    window.location.reload();
  }

  requestUserToFollow(userId) {
    this.api.requestUserToFollow(userId);
    this.isFollowing = true;
    window.location.reload();
  }

  showUserAccount(user) {
    this.navCtrl.navigateForward('/user-profile/' + user._id);
  }

  getFollowRequest() {
    this.api.getFollowRequests().then((x) => {
      this.requestIds = x;
      this.getRequestUsers();
    });
  }

  getCurrentUser() {
    this.api.getCurrentUser().then((x) => (this.currentUser = x));
  }

  getRequestUsers() {
    for (let i = 0; i < this.requestIds.length; i++) {
      this.api.getUser(this.requestIds[i]).then((x) => this.requests.push(x));
    }
  }

  async getAllUsers() {
    await this.api.getAllUsers().then((x) => {
      this.allUsers = x;
      console.log('user', this.allUsers, this.followingList, this.sentRequests);
      for (let i = 0; i < this.allUsers.length; i++) {
        this.allUsers[i].isFollowing = this.checkIsFollowing(
          this.allUsers[i]._id
        );
        this.allUsers[i].isRequested = this.checkIsRequested(
          this.allUsers[i]._id
        );
      }
      console.log('all', this.allUsers);
      this.allUsers = this.allUsers.filter(
        (x) => x._id !== this.currentUser._id
      );
      this.suggestedUsers = this.allUsers;
      console.log('s', this.suggestedUsers);
    });
  }

  getFollowingList() {
    this.api.getFollowingList().then((x) => (this.followingList = x));
  }

  getSentRequests() {
    this.api.getSentRequests().then((x) => {
      console.log('x', x);
      this.sentRequests = x;
    });
  }

  checkIsFollowing(userId: string) {
    console.log(this.followingList, userId);
    return 0 !== this.followingList.filter((x) => x === userId).length;
  }

  checkIsRequested(userId: string) {
    console.log('req', this.sentRequests, userId);
    return 0 !== this.sentRequests.filter((x) => x === userId).length;
  }
}
