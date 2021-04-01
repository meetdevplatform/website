import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderSearchComponent } from './header-search.component';



@NgModule({
  declarations: [HeaderSearchComponent],
  imports: [
    CommonModule
  ],
  exports:[HeaderSearchComponent]
})
export class HeaderSearchModule { }
