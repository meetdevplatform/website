import { Component, OnInit } from '@angular/core';
import { UIFunctions } from '../../functions/ui-functions';

@Component({
  selector: 'header-search',
  templateUrl: './header-search.component.html',
  styleUrls: ['./header-search.component.scss']
})
export class HeaderSearchComponent implements OnInit {

  constructor(public ui: UIFunctions) { }

  ngOnInit(): void {
  }

}
