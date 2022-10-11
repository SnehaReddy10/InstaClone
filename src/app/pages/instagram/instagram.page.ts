import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.page.html',
  styleUrls: ['./instagram.page.scss'],
})
export class InstagramPage implements OnInit {

  toppings: any;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  navigateToLogin(){
    this.router.navigateByUrl('login');
  }

  navigateToSignUp(){
    this.router.navigateByUrl('signup');
  }
}
