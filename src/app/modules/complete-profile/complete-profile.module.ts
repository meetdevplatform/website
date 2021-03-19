import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompleteProfileComponent } from './complete-profile.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderTertiaryComponent } from 'src/app/shared/components/header-tertiary/header-tertiary.component';

const routes: Routes = [
  {
    path:'',
    component:CompleteProfileComponent,
    children:[
      {
        path:'organization',
        loadChildren: () => import('./organization-details/organization-details.module').then(m => m.OrganizationDetailsModule)
      },
      {
        path:'interests',
        loadChildren: () => import('./select-interests/select-interests.module').then(m => m.SelectInterestsModule)
      },
      {
        path:'verify-email',
        loadChildren: () => import('../complete-profile/verify-email/verify-email.module').then(m => m.VerifyEmailModule)
      },
      {
        path:'post-social',
        loadChildren: () => import('../complete-profile/post-social/post-social.module').then(m => m.PostSocialModule)
      },
    ]
  }
  
];

@NgModule({
  declarations: [CompleteProfileComponent,HeaderTertiaryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})

export class CompleteProfileModule { }
