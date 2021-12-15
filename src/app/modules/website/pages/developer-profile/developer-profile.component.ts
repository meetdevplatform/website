import { Component, OnInit } from '@angular/core';
import { Interests } from 'src/app/shared/data/interests';
import { UIFunctions } from 'src/app/shared/functions/ui-functions';

@Component({
  selector: 'app-developer-profile',
  templateUrl: './developer-profile.component.html',
  styleUrls: ['./developer-profile.component.scss']
})
export class DeveloperProfileComponent implements OnInit {

  constructor(public ui:UIFunctions,public mockInterests:Interests) { }
  interests:any[] = [];
  ngOnInit(): void {
    this.ui.initFeather();
    this.interests = this.mockInterests.data.splice(0,6);
  }

}
