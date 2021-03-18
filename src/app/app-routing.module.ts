import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./modules/website/website.module').then(m => m.WebsiteModule)
  },
  {
    path:'login',
    loadChildren: () => import('./modules/authentication/login/login.module').then(m => m.LoginModule)
  },
  {
    path:'signup',
    loadChildren: () => import('./modules/authentication/signup/signup.module').then(m => m.SignupModule)
  },
   {
    path:'verify-email',
    loadChildren: () => import('./modules/authentication/verify-email/verify-email.module').then(m => m.VerifyEmailModule)
  },
  {
    path:'complete-profile',
    loadChildren: () => import('./modules/authentication/complete-profile/complete-profile.module').then(m => m.CompleteProfileModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
