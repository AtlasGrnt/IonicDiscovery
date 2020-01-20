import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { MenuController} from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  constructor(private themeService: ThemeService, private actionSheetController: ActionSheetController, menu: MenuController) {}

  toggleDarkMode(){
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
