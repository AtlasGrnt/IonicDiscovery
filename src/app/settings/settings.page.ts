import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private themeService: ThemeService) { }

  toggleDarkMode() {
    this.themeService.toggleAppTheme();
  }

  ngOnInit() {
  }

}
