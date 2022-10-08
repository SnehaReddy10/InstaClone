import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MessageRequestsPage } from './message-requests.page';

const routes: Routes = [
  {
    path: '',
    component: MessageRequestsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MessageRequestsPageRoutingModule {}
