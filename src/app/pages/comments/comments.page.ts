import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.page.html',
  styleUrls: ['./comments.page.scss'],
})
export class CommentsPage implements OnInit {
  liked: boolean = false;
  heart: any = {
    name: 'heart-outline',
    color: 'dark',
  };
  postComments: any;
  post: any;
  user: any;

  constructor(private api: ApiService, private route: Router) {
    this.getPostComments();
    this.getPost(this.route.url.split('/')[2]);
  }

  ngOnInit() {}

  changeHeart() {
    if (!this.liked) {
      this.liked = true;
      (this.heart.name = 'heart'), (this.heart.color = 'danger');
    } else {
      this.liked = false;
      (this.heart.name = 'heart-outline'), (this.heart.color = 'dark');
    }
  }

  likeComment() {}

  getPostComments() {
    this.api.getPostComments(this.route.url.split('/')[2]).then((x) => {
      this.postComments = x;
    });
  }

  async getPost(postId: string) {
    await this.api.getPost(postId).then((x) => {
      this.post = x;
      this.getUser(this.post.user_id);
    });
  }

  getUser(userId) {
    this.api.getUser(userId).then((x) => {
      this.user = x;
      console.log(x);
    });
  }
}
