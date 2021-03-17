import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderSecondaryComponent } from './header-secondary.component';

@NgModule({
  declarations: [HeaderSecondaryComponent],
  imports: [
    CommonModule
  ],
  exports:[HeaderSecondaryComponent]
})
export class HeaderSecondaryModule { }
