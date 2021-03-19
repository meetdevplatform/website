import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectInterestsComponent } from './select-interests.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component:SelectInterestsComponent
  },
];

@NgModule({
  declarations: [SelectInterestsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})

export class SelectInterestsModule { }
