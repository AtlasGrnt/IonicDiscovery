import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { MenuController} from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../services/theme.service';
import { BadgePage } from '../badge/badge.page';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth} from 'firebase/app';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  jsonData: any = [];

  constructor(public afAuth: AngularFireAuth,
              private themeService: ThemeService,
              private actionSheetController: ActionSheetController,
              menu: MenuController) {
    this.InitialiseJsonData();
  }

  toggleDarkMode() {
    this.themeService.toggleAppTheme();
  }

  async openActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Connexion',
      buttons: [{
        text: 'Inscription',
        icon: 'thumbs-up',
        handler: () => {
         console.log('Inscription');
        }
      }, {
        text: 'Connexion',
        icon: 'add-circle-outline',
        handler: () => {
          console.log('Connected');
        }
      }, {
        text: 'Déconnexion',
        role: 'destructive',
        icon: 'power',
        handler: () => {
          console.log('Disconnect');
        }
      }, {
        text: 'Annuler',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Annulation');
        }
      }]
    });
    await actionSheet.present();
  }

  FilterJsonData(ev: any) {
    this.InitialiseJsonData();
    const val = ev.target.value;
    if (val && val.trim() !== '' ) {
      this.jsonData = this.jsonData.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  selectVal(val) {
  }

  InitialiseJsonData() {
    this.jsonData = [
      {
        name: 'Ion-Badge',
        code: 'BA'
      },
      {
        name: 'Ion-Card',
        code: 'CA'
      },
      {
        name: 'Ion-Checkbox',
        code: 'CH'
      },
      {
        name: 'Ion-Chip',
        code: 'CI'
      },
      {
        name: 'Ion-Datetime',
        code: 'DA'
      },
      {
        name: 'Ion-Fab',
        code: 'FA'
      },
      {
        name: 'Ion-List',
        code: 'LI'
      },
      {
        name: 'Progress Bar',
        code: 'PR'
      },
      {
        name: 'Ion-Tabs',
        code: 'TA'
      },
    ];
  }

}

export class Menu {

  constructor(private menu: MenuController) { }
    openFirst() {
      this.menu.enable(true, 'first');
      this.menu.open('first');
    }
    openEnd() {
      this.menu.open('end');
    }
    openCustom() {
      this.menu.enable(true, 'custom');
      this.menu.open('custom');
    }
  }
