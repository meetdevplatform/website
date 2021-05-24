import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardHorizontalComponent } from './project-card-horizontal.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ProjectCardHorizontalComponent],
  imports: [
    CommonModule,RouterModule
  ],
  exports:[ProjectCardHorizontalComponent]
})

export class ProjectCardHorizontalModule { }
