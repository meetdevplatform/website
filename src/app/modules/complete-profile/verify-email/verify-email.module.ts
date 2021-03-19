import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerifyEmailComponent } from './verify-email.component';
import { Routes, RouterModule } from '@angular/router';
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
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})

export class VerifyEmailModule { }
