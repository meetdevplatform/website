import { Component, OnInit } from '@angular/core';
import { UIFunctions } from '../../functions/ui-functions';

@Component({
  selector: 'header-primary',
  templateUrl: './header-primary.component.html',
  styleUrls: ['./header-primary.component.scss']
})
export class HeaderPrimaryComponent implements OnInit {

  constructor(public ui: UIFunctions) { }

  ngOnInit(): void {
    this.ui.initFeather();
  }

}
