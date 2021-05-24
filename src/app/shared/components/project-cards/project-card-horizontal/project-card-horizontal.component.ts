import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'project-card-horizontal',
  templateUrl: './project-card-horizontal.component.html',
  styleUrls: ['./project-card-horizontal.component.scss']
})
export class ProjectCardHorizontalComponent implements OnInit {

  @Input() project:any;
  constructor() { }

  ngOnInit(): void {
  }

}
