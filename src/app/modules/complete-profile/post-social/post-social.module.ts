import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostSocialComponent } from './post-social.component';
import { Routes, RouterModule } from '@angular/router';
import { OrganizationFormModule } from 'src/app/shared/components/forms/organization-form/organization-form.module';

const routes: Routes = [
  {
    path:'',
    component:PostSocialComponent
  },
];


@NgModule({
  declarations: [PostSocialComponent],
  imports: [
    CommonModule,
    OrganizationFormModule,
    RouterModule.forChild(routes)
  ]
})

export class PostSocialModule { }
