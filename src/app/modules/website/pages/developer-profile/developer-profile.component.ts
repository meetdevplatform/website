import { Component, OnInit } from '@angular/core';
import { Interests } from 'src/app/shared/data/interests';
import { IProject } from 'src/app/shared/data/interfaces';
import { DummyProjects } from 'src/app/shared/data/projects_data';
import { HelperFunctions } from 'src/app/shared/functions/helper';
import { UIFunctions } from 'src/app/shared/functions/ui-functions';

@Component({
  selector: 'app-developer-profile',
  templateUrl: './developer-profile.component.html',
  styleUrls: ['./developer-profile.component.scss']
})
export class DeveloperProfileComponent implements OnInit {

  constructor(public ui:UIFunctions,public mockInterests:Interests, private dummyProjects:DummyProjects) { }
  interests:any[] = [];
  activeTab: String = new String();
  personalProjects:any[] = [];
  contributedProjects:any[] = [];
  projectsToDisplay:any[] = [];
  
  ngOnInit(): void {
    this.ui.initFeather();
    this.interests = this.mockInterests.data.splice(0,6);
    this.dummyProjects.projectsArr.forEach(el => {
      this.personalProjects.push.apply(this.personalProjects,HelperFunctions.repeatElements(2,el));
    }); 
    console.log(this.personalProjects);
    this.contributedProjects = this.dummyProjects.projectsArr;
    
    this.activeTab = "Personal"
    this.selectProjectstoShow();
  }

  selectProjectstoShow(){
    if(this.activeTab == "Personal"){
      this.projectsToDisplay = this.personalProjects;
    }
    else if(this.activeTab == "Contributed"){
      this.projectsToDisplay = this.contributedProjects;
    }
  }

  changeProjectView(projectType:string){
    this.activeTab = projectType;
    this.selectProjectstoShow();
  }

}
