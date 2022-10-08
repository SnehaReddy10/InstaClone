import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MessageRequestsPageRoutingModule } from './message-requests-routing.module';

import { MessageRequestsPage } from './message-requests.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessageRequestsPageRoutingModule
  ],
  declarations: [MessageRequestsPage]
})
export class MessageRequestsPageModule {}
