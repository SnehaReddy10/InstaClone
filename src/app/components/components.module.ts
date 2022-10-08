import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { TabsComponent } from './tabs/tabs.component';
import { IonicModule } from '@ionic/angular';
import { PeopleComponent } from './people/people.component';



@NgModule({
  declarations: [
    PostComponent,
    TabsComponent,
    PeopleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PostComponent,
    TabsComponent,
    PeopleComponent
  ]
})
export class ComponentsModule { }
