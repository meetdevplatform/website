import { Component, Input, OnInit } from '@angular/core';
import { IProject } from 'src/app/shared/data/interfaces';
import { UIFunctions } from 'src/app/shared/functions/ui-functions';

@Component({
  selector: 'project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {


  @Input() project:any;

  constructor(public ui:UIFunctions) { }

  ngOnInit(): void {
    this.ui.initFeather();
  }

}
