import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {

  user: any;
  highlights: any[] = [];

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.user = this.api.users[0];
    this.highlights = this.user.highLights;
  }

}
