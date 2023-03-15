import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  allUsers: any;
  query: string;
  searchUsers: any;
  currentUser: any;
  alreadyFollowing: any;
  isFollowing: any;
  followingList: any;
  sentRequests: any;

  constructor(private apiService: ApiService) {
    this.getCurrentUser();
    this.getFollowingList();
    this.getSentRequests();
    this.getAllUsers();
  }

  ngOnInit() {}

  async getAllUsers() {
    await this.apiService.getAllUsers().then((x) => {
      this.allUsers = x;
      for (let i = 0; i < this.allUsers.length; i++) {
        this.allUsers[i].isFollowing = this.checkIsFollowing(
          this.allUsers[i]._id
        );
        this.allUsers[i].isRequested = this.checkIsRequested(
          this.allUsers[i]._id
        );
      }
      this.allUsers = this.allUsers.filter(
        (x) => x._id !== this.currentUser._id
      );
      this.searchUsers = this.allUsers;
      console.log('allusers', this.allUsers);
    });
  }

  async onSearchChange(event) {
    this.query = event.detail.value.toLowerCase();
    this.searchUsers = [];
    if (this.query.length > 0) {
      setTimeout(async () => {
        this.searchUsers = await this.allUsers.filter((element: any) => {
          return element.username.includes(this.query);
        });
      }, 300);
    }
  }

  getCurrentUser() {
    this.apiService.getCurrentUser().then((x) => (this.currentUser = x));
  }

  requestUserToFollow(userId) {
    this.apiService.requestUserToFollow(userId);
    this.isFollowing = true;
    window.location.reload();
  }

  getFollowingList() {
    this.apiService.getFollowingList().then((x) => (this.followingList = x));
  }

  getSentRequests() {
    this.apiService.getSentRequests().then((x) => {
      this.sentRequests = x;
    });
  }

  checkIsFollowing(userId: string) {
    return 0 !== this.followingList.filter((x) => x === userId).length;
  }

  checkIsRequested(userId: string) {
    return 0 !== this.sentRequests.filter((x) => x === userId).length;
  }

  deleteRequest(userId: string) {
    this.apiService.requestUserToFollow(userId);
    window.location.reload();
  }
}
