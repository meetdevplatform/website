import { Component, OnInit } from '@angular/core';
import { UIFunctions } from '../../functions/ui-functions';

@Component({
  selector: 'header-tertiary',
  templateUrl: './header-tertiary.component.html',
  styleUrls: ['./header-tertiary.component.scss']
})
export class HeaderTertiaryComponent implements OnInit {

  constructor(public ui :UIFunctions) { }

  ngOnInit(): void {
    this.ui.initFeather();
  }

}
