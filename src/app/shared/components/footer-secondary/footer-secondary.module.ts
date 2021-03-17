import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterSecondaryComponent } from './footer-secondary.component';



@NgModule({
  declarations: [FooterSecondaryComponent],
  imports: [
    CommonModule
  ],
  exports:[FooterSecondaryComponent]
})
export class FooterSecondaryModule { }
