import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LazyLoadImageModule } from 'ng-lazyload-image'; // <-- import it

const routes: Routes = [
  {
    path:'',
    component:SignupComponent
  },
];

@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LazyLoadImageModule,
    RouterModule.forChild(routes)
  ]
})
export class SignupModule { }
