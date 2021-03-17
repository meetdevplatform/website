import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerifyEmailComponent } from './verify-email.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderSecondaryModule } from 'src/app/shared/components/header-secondary/header-secondary.module';
import { FooterSecondaryModule } from 'src/app/shared/components/footer-secondary/footer-secondary.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path:'',
    component:VerifyEmailComponent
  },
];


@NgModule({
  declarations: [VerifyEmailComponent],
  imports: [
    CommonModule,
    HeaderSecondaryModule,
    FooterSecondaryModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class VerifyEmailModule { }
