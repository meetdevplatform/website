import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderPrimaryComponent } from './header-primary.component';
import { HeaderSearchModule } from '../header-search/header-search.module';

@NgModule({
  declarations: [HeaderPrimaryComponent],
  imports: [
    CommonModule,
    HeaderSearchModule
  ],
  exports:[HeaderPrimaryComponent]
})

export class HeaderPrimaryModule { }
