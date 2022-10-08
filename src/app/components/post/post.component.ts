import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  
  liked: boolean = false;
  bookmarked: boolean = false;

  bookmark: any = {
    name: 'bookmark-outline'
  }
  img: {
    imgSrc: 'https://th.bing.com/th/id/OIP.1moOVABLsAl172i_UsaCMQHaF5?pid=ImgDet&rs=1'
  };
  heart: any = {
    name: 'heart-outline',
    color: 'dark'
  };

  constructor(private navCtrl: NavController) { }

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

  addToBookmarks(){
    if(!this.bookmarked){
      this.bookmarked = true;
      this.bookmark.name = 'bookmark'
    }else{
      this.bookmarked = false;
      this.bookmark.name = 'bookmark-outline'
    }
  }

  goToComments(){
      this.navCtrl.navigateForward("/comments")
  }
}
