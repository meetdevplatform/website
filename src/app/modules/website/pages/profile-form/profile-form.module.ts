import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileFormComponent } from './profile-form.component';
import { RouterModule, Routes } from '@angular/router';
import { NiceSelectModule } from 'ng-nice-select';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path:'',
    component:ProfileFormComponent
  },
];


@NgModule({
  declarations: [ProfileFormComponent],
  imports: [
    CommonModule,
    NiceSelectModule,
    NgSelectModule,
    FormsModule,ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class ProfileFormModule { }
