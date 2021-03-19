import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationDetailsComponent } from './organization-details.component';
import { Routes, RouterModule } from '@angular/router';
import { OrganizationFormModule } from 'src/app/shared/components/forms/organization-form/organization-form.module';

const routes: Routes = [
  {
    path:'',
    component:OrganizationDetailsComponent
  },
];


@NgModule({
  declarations: [OrganizationDetailsComponent],
  imports: [
    CommonModule,
    OrganizationFormModule,
    RouterModule.forChild(routes)
  ]
})

export class OrganizationDetailsModule { }
