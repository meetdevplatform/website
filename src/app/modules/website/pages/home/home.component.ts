import { Component, OnInit } from '@angular/core';
import { DummyProjects } from 'src/app/shared/data/projects_data';
import { DummyProfiles } from 'src/app/shared/data/profile-list';
import {profileCarousel} from 'src/app/shared/data/owl_configs';
import { UIFunctions } from 'src/app/shared/functions/ui-functions';
import { DummyCategories } from 'src/app/shared/data/categories';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  projectsForYou :any[] = [];
  similarProfiles:any[] = [];
  popularCategories:any[] = [];
  popularProjects:any[] = [];

  constructor(public projectsData:DummyProjects, public profilesData:DummyProfiles,public categories:DummyCategories, public ui:UIFunctions) { }
  profileCarousel:any;
  ngOnInit(): void {
    this.projectsForYou = this.projectsData.projectsArr;
    this.similarProfiles = this.profilesData.profiles;
    this.popularCategories = this.categories.data;
    this.popularProjects = this.projectsData.projectsArr;
    this.profileCarousel = profileCarousel;
  }
}
