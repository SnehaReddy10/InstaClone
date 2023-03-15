import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  currentUser: any;

  constructor(private api: ApiService) {
    this.getCurrentUser();
  }

  ngOnInit() {}

  async getCurrentUser() {
    await this.api.getCurrentUser().then((x) => (this.currentUser = x));
    console.log(this.currentUser);
  }
}
