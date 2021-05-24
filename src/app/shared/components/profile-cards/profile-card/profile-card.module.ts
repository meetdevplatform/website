import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileCardComponent } from './profile-card.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ProfileCardComponent],
  imports: [
    CommonModule,RouterModule
  ],
  exports:[ProfileCardComponent]
})
export class ProfileCardModule { }
