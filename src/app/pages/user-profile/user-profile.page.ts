import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {
  currentUser: any;
  highlights: any;

  constructor(private api: ApiService, private router: Router) {
    this.getUser();
  }

  ngOnInit() {}

  getUser() {
    const userId = this.router.url.split('/')[2];
    this.api.getUser(userId).then((x) => {
      this.currentUser = x;
      console.log(x);
    });
  }
}
