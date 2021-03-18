import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompleteProfileComponent } from './complete-profile.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderSecondaryModule } from 'src/app/shared/components/header-secondary/header-secondary.module';
import { FooterSecondaryModule } from 'src/app/shared/components/footer-secondary/footer-secondary.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path:'',
    component:CompleteProfileComponent
  },
];


@NgModule({
  declarations: [CompleteProfileComponent],
  imports: [
    CommonModule,
    HeaderSecondaryModule,
    FooterSecondaryModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class CompleteProfileModule { }
