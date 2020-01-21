import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatFinnPageRoutingModule } from './chat-finn-routing.module';

import { ChatFinnPage } from './chat-finn.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatFinnPageRoutingModule
  ],
  declarations: [ChatFinnPage]
})
export class ChatFinnPageModule {}
