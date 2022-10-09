import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  result: any;
  items: any[] = [
    {
      imgSrc: 'https://th.bing.com/th/id/OIP.1moOVABLsAl172i_UsaCMQHaF5?pid=ImgDet&rs=1'
    },
    {
      imgSrc: 'https://th.bing.com/th/id/OIP.pMg8F2rzkZJ0c_HpqT3HXAHaFj?w=244&h=184&c=7&r=0&o=5&dpr=1.6&pid=1.7'
    }
  ];
  users: any[] = [];

  constructor(
    private actionSheetCtrl: ActionSheetController,
    private api: ApiService) { }

  ngOnInit() {
    this.users = this.api.users;
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Following',
          role: 'destructive',
          data: {
            action: 'delete',
          },
          icon: 'people-outline'
        },
        {
          text: 'Favorites',
          data: {
            action: 'share',
          },
          icon: 'star-outline'
        }
      ],
    });

    await actionSheet.present();

    const result = await actionSheet.onDidDismiss();
    this.result = JSON.stringify(result, null, 2);
  }

  navigateToMessages(){

  }

}
