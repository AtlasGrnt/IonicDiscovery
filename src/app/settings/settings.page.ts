import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../services/theme.service';
import {Brightness} from '@ionic-native/brightness/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  rangeval:number = 100;

  constructor(private themeService: ThemeService, public brightness: Brightness, public platform: Platform) {
    this.platform.ready().then(() => {
      this.SetBrightness();
    })
   }

  toggleDarkMode() {
    this.themeService.toggleAppTheme();
  }

  SetBrightness(){
    this.brightness.setBrightness(this.rangeval/100).then(() => {

    }, (err) => {
      alert(JSON.stringify(err));
    });
  }

  ngOnInit() {
  }

}
