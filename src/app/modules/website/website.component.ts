import { Component, OnInit } from '@angular/core';
import {
  Router, Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
} from '@angular/router';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.scss']
})
export class WebsiteComponent implements OnInit {
  
  showSecondary: Boolean = true;
  constructor(public router: Router) {
    this.checkForHeader();
  }

  ngOnInit(): void {
  }

  checkForHeader() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event['url'] == '/login' || event['url'] == '/signup') this.showSecondary = true;
        else this.showSecondary = false;
      }
    });
  }

}
