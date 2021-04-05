import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompleteProfileComponent } from './complete-profile.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderSecondaryModule } from 'src/app/shared/layouts/header-secondary/header-secondary.module';
import { FooterTertiaryModule } from 'src/app/shared/layouts/footer-tertiary/footer-tertiary.module';

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
  declarations: [CompleteProfileComponent],
  imports: [
    CommonModule,
    HeaderSecondaryModule,
    FooterTertiaryModule,
    RouterModule.forChild(routes)
  ]
})

export class CompleteProfileModule { }
