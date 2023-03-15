import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HomePage } from 'src/app/pages/tabs/home/home.page';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  liked: boolean = false;
  bookmarked: boolean = false;

  bookmark: any = {
    name: 'bookmark-outline',
  };
  img: {
    imgSrc: 'https://th.bing.com/th/id/OIP.1moOVABLsAl172i_UsaCMQHaF5?pid=ImgDet&rs=1';
  };
  heart: any = {
    name: 'heart-outline',
    color: 'dark',
  };
  isLiked: boolean;
  isSaved: boolean;
  comments: any;
  saved: any;

  @Input() post: any;
  @Input() currentUser: any;
  @Input() savedPosts: any;
  comment: string;

  constructor(private navCtrl: NavController, private api: ApiService) {
    setTimeout(() => {
      const liked = this.post.likes.filter((x) => this.currentUser._id);
      this.saved = this.savedPosts.filter((x) => x === this.post.post_id);
      if (liked.length) {
        this.isLiked = true;
      } else {
        this.isLiked = false;
      }
      if (this.saved.length) {
        this.bookmarked = true;
      } else {
        this.bookmarked = false;
      }
      this.getComments(this.post.post_id);
      this.postAlreadyLiked();
      this.postAlreadySaved();
    }, 0);
  }

  ngOnInit() {}

  postAlreadyLiked() {
    if (this.isLiked) {
      (this.heart.name = 'heart'), (this.heart.color = 'danger');
    } else {
      (this.heart.name = 'heart-outline'), (this.heart.color = 'dark');
    }
  }

  postAlreadySaved() {
    if (this.bookmarked) {
      this.bookmark.name = 'bookmark';
    } else {
      this.bookmark.name = 'bookmark-outline';
    }
  }

  async changeHeart() {
    if (!this.isLiked) {
      this.isLiked = true;
      (this.heart.name = 'heart'),
        (this.heart.color = 'danger'),
        this.api.likePost(this.post.post_id, this.isLiked);
    } else {
      this.isLiked = false;
      (this.heart.name = 'heart-outline'),
        (this.heart.color = 'dark'),
        await this.api.likePost(this.post.post_id, this.isLiked);
    }
  }

  async addToBookmarks(postId: string) {
    if (!this.bookmarked) {
      this.bookmarked = true;
      this.bookmark.name = 'bookmark';
    } else {
      this.bookmarked = false;
      this.bookmark.name = 'bookmark-outline';
    }
    await this.api.addToSavedPosts(postId);
    console.log('postid', this.post.post_id);
  }

  goToComments() {
    this.navCtrl.navigateForward('/comments');
  }

  addComment(user_comment, post_id) {
    this.api.addComment(user_comment, post_id);
    window.location.reload();
  }

  getComments(post_id) {
    this.api.getPostComments(post_id).then((x) => {
      this.comments = x;
    });
  }
}
