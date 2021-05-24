import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WebsiteComponent } from './website.component';

const routes: Routes = [
  {
    path:'',
    component:WebsiteComponent,
    children:[
      {
        path:'',
        component:HomeComponent,
      },
      {
        path:'user',
        loadChildren: () => import('./pages/developer-profile/developer-profile.module').then(m => m.DeveloperProfileModule)
      },
      {
        path:'login',
        loadChildren: () => import('../../modules/authentication/login/login.module').then(m => m.LoginModule)
      },
      {
        path:'signup',
        loadChildren: () => import('../../modules/authentication/signup/signup.module').then(m => m.SignupModule)
      },
      {
        path:'profile/edit',
        loadChildren: () => import('./pages/profile-form/profile-form.module').then(m => m.ProfileFormModule)
      },
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
