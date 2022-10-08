import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.page.html',
  styleUrls: ['./comments.page.scss'],
})
export class CommentsPage implements OnInit {

  liked: boolean = false;
  heart: any = {
    name: 'heart-outline',
    color: 'dark'
  };

  constructor() { }

  ngOnInit() {
  }

  changeHeart(){
    if(!this.liked){
      this.liked = true;
      this.heart.name = 'heart',
      this.heart.color = 'danger'
    }else{
      this.liked = false;
      this.heart.name = 'heart-outline',
      this.heart.color = 'dark'
    }
  }
}
