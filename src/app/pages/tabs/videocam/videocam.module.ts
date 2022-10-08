import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideocamPageRoutingModule } from './videocam-routing.module';

import { VideocamPage } from './videocam.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideocamPageRoutingModule
  ],
  declarations: [VideocamPage]
})
export class VideocamPageModule {}
