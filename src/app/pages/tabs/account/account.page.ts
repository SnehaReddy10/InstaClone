import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  result: any;

  constructor(private actionSheetCtrl: ActionSheetController) { }

  ngOnInit() {
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      buttons: [
        {
          text: '_siri_12',
          role: 'destructive',
          data: {
            action: 'delete',
          },
          icon: 'radio-button-on-outline',
        },
        {
          text: 'Add account',
          data: {
            action: 'share',
          },
          icon: 'add-circle-outline'
        }
      ],
    });

    await actionSheet.present();

    const result = await actionSheet.onDidDismiss();
    this.result = JSON.stringify(result, null, 2);
  }

  async create() {
    const actionSheet = await this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Reel',
          role: 'destructive',
          data: {
            action: 'delete',
          },
          icon: 'videocam',
        },
        {
          text: 'Post',
          data: {
            action: 'share',
          },
          icon: 'apps-outline',
        },
        {
          text: 'Story',
          data: {
            action: 'share',
          },
          icon: 'add-circle-outline'
        },
        {
          text: 'Story Highlight',
          data: {
            action: 'share',
          },
          icon: 'heart-circle-outline'
        },
        {
          text: 'Live',
          data: {
            action: 'share',
          },
          icon: 'radio-outline'
        },
        {
          text: 'Guide',
          data: {
            action: 'share',
          },
          icon: 'book'
        }
      ],
    });

    await actionSheet.present();

    const result = await actionSheet.onDidDismiss();
    this.result = JSON.stringify(result, null, 2);
  }

  async settings() {
    const actionSheet = await this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Settings',
          role: 'destructive',
          data: {
            action: 'delete',
          },
          icon: 'settings-outline',
        },
        {
          text: 'Archive',
          data: {
            action: 'share',
          },
          icon: 'archive-outline'
        },
        {
          text: 'Your Activity',
          role: 'destructive',
          data: {
            action: 'delete',
          },
          icon: 'timer-outline',
        },{
          text: 'QR Code',
          role: 'destructive',
          data: {
            action: 'delete',
          },
          icon: 'qr-code-outline',
        },{
          text: 'Saved',
          role: 'destructive',
          data: {
            action: 'delete',
          },
          icon: 'bookmark-outline',
        },{
          text: 'Digital collectibles',
          role: 'destructive',
          data: {
            action: 'delete',
          },
          icon: 'checkmark-circle-outline',
        },{
          text: 'Close Friends',
          role: 'destructive',
          data: {
            action: 'delete',
          },
          icon: 'list-outline',
        },{
          text: 'Favorites',
          role: 'destructive',
          data: {
            action: 'delete',
          },
          icon: 'star-outline',
        },{
          text: 'COVID-19 Information Center',
          role: 'destructive',
          data: {
            action: 'delete',
          },
          icon: 'heart-circle-outline',
        },{
          text: 'Update messaging',
          role: 'destructive',
          data: {
            action: 'delete',
          },
          icon: 'chatbubble-ellipses-outline',
        },
      ],
    });

    await actionSheet.present();

    const result = await actionSheet.onDidDismiss();
    this.result = JSON.stringify(result, null, 2);
  }

}
