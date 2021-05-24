import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'technology-card',
  templateUrl: './technology-card.component.html',
  styleUrls: ['./technology-card.component.scss']
})
export class TechnologyCardComponent implements OnInit {

  @Input() technology:any;
  constructor() { }

  ngOnInit(): void {
  }

}
