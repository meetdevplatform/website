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
        path:'login',
        loadChildren: () => import('../../modules/authentication/login/login.module').then(m => m.LoginModule)
      },
      {
        path:'signup',
        loadChildren: () => import('../../modules/authentication/signup/signup.module').then(m => m.SignupModule)
      },
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
