import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./modules/website/website.module').then(m => m.WebsiteModule)
  },
  {
    path:'complete-profile',
    loadChildren: () => import('./modules/complete-profile/complete-profile.module').then(m => m.CompleteProfileModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
