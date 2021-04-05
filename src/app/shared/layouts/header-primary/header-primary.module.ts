import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderPrimaryComponent } from './header-primary.component';
import { HeaderSearchModule } from '../header-search/header-search.module';
import { RouterModule } from '@angular/router';
import { ThemeTogglerModule } from '../../components/theme-toggler/theme-toggler.module';

@NgModule({
  declarations: [HeaderPrimaryComponent],
  imports: [
    CommonModule,
    HeaderSearchModule,
    RouterModule,
    ThemeTogglerModule
  ],
  exports:[HeaderPrimaryComponent]
})

export class HeaderPrimaryModule { }
