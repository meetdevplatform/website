import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterTertiaryComponent } from './footer-tertiary.component';
import { ThemeTogglerModule } from '../../components/theme-toggler/theme-toggler.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FooterTertiaryComponent],
  imports: [
    CommonModule,
    ThemeTogglerModule,
    RouterModule
  ],
  exports:[FooterTertiaryComponent]
})

export class FooterTertiaryModule { }
