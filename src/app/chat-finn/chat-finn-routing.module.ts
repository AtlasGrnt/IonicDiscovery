import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatFinnPage } from './chat-finn.page';

const routes: Routes = [
  {
    path: '',
    component: ChatFinnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatFinnPageRoutingModule {}
