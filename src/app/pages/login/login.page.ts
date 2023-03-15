import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string;
  password: string;

  constructor(private api: ApiService, private navCtrl: NavController) {}

  ngOnInit() {}

  async login() {
    try {
      await this.api.loginUser(this.email, this.password);
      this.navCtrl.navigateForward('tabs/home');
    } catch (err) {
      console.log(err);
    }
  }
}
