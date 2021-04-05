import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterSecondaryComponent } from './footer-secondary.component';
import { ThemeTogglerModule } from '../../components/theme-toggler/theme-toggler.module';



@NgModule({
  declarations: [FooterSecondaryComponent],
  imports: [
    CommonModule,
    ThemeTogglerModule
  ],
  exports:[FooterSecondaryComponent]
})
export class FooterSecondaryModule { }
