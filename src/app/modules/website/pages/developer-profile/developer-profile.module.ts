import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeveloperProfileComponent } from './developer-profile.component';
import { RouterModule, Routes } from '@angular/router';

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
    RouterModule.forChild(routes)
  ]
})

export class DeveloperProfileModule { }
