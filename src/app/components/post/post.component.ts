import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {

  
  liked: boolean = false;
  img: {
    imgSrc: 'https://th.bing.com/th/id/OIP.1moOVABLsAl172i_UsaCMQHaF5?pid=ImgDet&rs=1'
  };
  heart: any = {
    name: 'heart-outline',
    color: 'dark'
  };

  constructor() { }

  ngOnInit() {}

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
