import { Component, OnInit } from '@angular/core';
import { DummyProjects } from 'src/app/shared/data/_projects_data';
import { DummyProfiles } from 'src/app/shared/data/profile-list';
import {profileCarousel} from 'src/app/shared/data/owl_configs';
import { UIFunctions } from 'src/app/shared/functions/ui-functions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  projectsForYou :any[] = [];
  similarProfiles:any[] = [];
  constructor(public projectsData:DummyProjects, public profilesData:DummyProfiles, public ui:UIFunctions) { }
  profileCarousel:any;
  ngOnInit(): void {
    this.projectsForYou = this.projectsData.projectsArr;
    this.similarProfiles = this.profilesData.profiles;
    this.profileCarousel = profileCarousel;
  }

  

}
