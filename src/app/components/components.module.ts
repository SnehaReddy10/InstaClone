import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { TabsComponent } from './tabs/tabs.component';
import { IonicModule } from '@ionic/angular';
import { PeopleComponent } from './people/people.component';
import { TabsMessagesComponent } from './tabs-messages/tabs-messages.component';
import { CallsComponent } from './calls/calls.component';
import { ChatsComponent } from './chats/chats.component';



@NgModule({
  declarations: [
    PostComponent,
    TabsComponent,
    PeopleComponent,
    TabsMessagesComponent,
    CallsComponent,
    ChatsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PostComponent,
    TabsComponent,
    PeopleComponent,
    TabsMessagesComponent,
    CallsComponent,
    ChatsComponent
  ]
})
export class ComponentsModule { }
