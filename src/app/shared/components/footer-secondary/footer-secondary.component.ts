import { Component, OnInit } from '@angular/core';
import { UIFunctions } from '../../functions/ui-functions';
declare var $:any;

@Component({
  selector: 'footer-secondary',
  templateUrl: './footer-secondary.component.html',
  styleUrls: ['./footer-secondary.component.scss']
})
export class FooterSecondaryComponent implements OnInit {

  constructor(public ui :UIFunctions) { }
  ngOnInit(): void {
    this.ui.initFeather();
    this.ui.addOptionEventListener('#footer-toggle', '#footer-mobile-menu');
  }
}
