import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  isOpen = false;
  result: any;
  items: any[] = [
    {
      imgSrc:
        'https://th.bing.com/th/id/OIP.1moOVABLsAl172i_UsaCMQHaF5?pid=ImgDet&rs=1',
    },
    {
      imgSrc:
        'https://th.bing.com/th/id/OIP.pMg8F2rzkZJ0c_HpqT3HXAHaFj?w=244&h=184&c=7&r=0&o=5&dpr=1.6&pid=1.7',
    },
  ];
  storyImg: any;
  followingStories: any;
  postComments: any;
  followingPosts: any;
  currentUser: any;

  constructor(
    private actionSheetCtrl: ActionSheetController,
    private api: ApiService
  ) {
    this.getFollowingStories();
    this.getFollowingPosts();
    this.getCurrentUser();
    console.log('comments', this.postComments);
  }

  ngOnInit() {}

  async presentActionSheet() {
    this.api.getUserPosts();
    const actionSheet = await this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Following',
          role: 'destructive',
          data: {
            action: 'delete',
          },
          icon: 'people-outline',
        },
        {
          text: 'Favorites',
          data: {
            action: 'share',
          },
          icon: 'star-outline',
        },
      ],
    });

    await actionSheet.present();

    const result = await actionSheet.onDidDismiss();
    this.result = JSON.stringify(result, null, 2);
  }

  navigateToMessages() {}

  presentPopover(event) {
    console.log(event);
    this.isOpen = true;
    this.storyImg = event.profilePic;
  }

  async getCurrentUser() {
    await this.api.getCurrentUser().then((x) => (this.currentUser = x));
    console.log(this.currentUser);
  }

  getFollowingStories() {
    this.api.getFollowingStories().then((x) => {
      this.followingStories = x;
      console.log('stories', x);
    });
  }

  getFollowingPosts() {
    this.api.getFollowingPosts().then((x) => {
      this.followingPosts = x;
      console.log('followingPosts', this.followingPosts);
    });
  }

  addPost() {
    this.api.addPost();
  }
}
