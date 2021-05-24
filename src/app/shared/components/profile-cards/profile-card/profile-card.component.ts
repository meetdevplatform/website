import { Component, Input, OnInit } from '@angular/core';
import { UIFunctions } from 'src/app/shared/functions/ui-functions';

@Component({
  selector: 'profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {

  @Input() profile:any;
  constructor(public ui:UIFunctions) { }

  ngOnInit(): void {
    this.ui.initFeather();
  }

}
