import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';


@Component({
  selector: 'app-chat-finn',
  templateUrl: './chat-finn.page.html',
  styleUrls: ['./chat-finn.page.scss'],
})
export class ChatFinnPage {

  messages = [
    {
      user: 'greg',
      createdAt: 1554090856000,
      msg: 'Yo ! Quoi de neuf ?'
    },
    {
      user: 'finn',
      createdAt: 1554090956000,
      msg: 'yo, rien je chill avec rey et toi ?'
    },
    {
      user: 'greg',
      createdAt: 1554091056000,
      msg: 'ah ah zero tu la choppe !'
    }
  ];

  currentUser = 'greg';
  newMsg = '';
  @ViewChild(IonContent, {static: true}) content: IonContent;

  sendMessage(){
    this.messages.push({
      user: 'greg',
      createdAt: new Date().getTime(),
      msg: this.newMsg
    });
    this.newMsg = '';
    setTimeout(() => {
      this.content.scrollToBottom(200);
    });
  }
}
