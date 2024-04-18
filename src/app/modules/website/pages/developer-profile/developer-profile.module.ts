import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeveloperProfileComponent } from './developer-profile.component';
import { RouterModule, Routes } from '@angular/router';
import { ProjectCardModule } from 'src/app/shared/components/project-cards/project-card/project-card.module';

const routes: Routes = [
  {
    path:'',
    component:DeveloperProfileComponent
  },
];


@NgModule({
  declarations: [DeveloperProfileComponent],
  imports: [
    CommonModule,
    ProjectCardModule,
    RouterModule.forChild(routes)
  ]
})

export class DeveloperProfileModule { }
