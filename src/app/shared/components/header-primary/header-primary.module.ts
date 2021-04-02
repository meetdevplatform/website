import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderPrimaryComponent } from './header-primary.component';
import { HeaderSearchModule } from '../header-search/header-search.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderPrimaryComponent],
  imports: [
    CommonModule,
    HeaderSearchModule,
    RouterModule
  ],
  exports:[HeaderPrimaryComponent]
})

export class HeaderPrimaryModule { }
