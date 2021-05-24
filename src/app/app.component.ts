import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ThemeTogglerComponent } from './shared/components/theme-toggler/theme-toggler.component';
import { UIFunctions } from './shared/functions/ui-functions';
declare var anime: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'meetdev';

  constructor(private router: Router, public ui: UIFunctions) {}

  themeComponent = new ThemeTogglerComponent(this.ui);

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
          this.ui.isDark = true;
        }
        else {
          this.ui.isDark = false;
        }
    console.log("App Init - is Dark", this.ui.isDark);
   

    this.ui.toggleTheme();
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      this.ui.isDark = e.matches ? true : false;
      this.ui.toggleTheme();
      this.themeComponent.morphTo(anime.timeline({
        duration: 750,
        easing: "easeOutExpo"
      }),!this.ui.isDark);
    });
  }
}

