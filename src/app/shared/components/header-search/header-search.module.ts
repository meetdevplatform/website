import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderSearchComponent } from './header-search.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  declarations: [HeaderSearchComponent],
  imports: [
    CommonModule,
    LazyLoadImageModule
  ],
  exports:[HeaderSearchComponent]
})
export class HeaderSearchModule { }
