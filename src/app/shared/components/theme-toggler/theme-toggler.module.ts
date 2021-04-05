import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeTogglerComponent } from './theme-toggler.component';



@NgModule({
  declarations: [ThemeTogglerComponent],
  imports: [
    CommonModule
  ],
  exports:[ThemeTogglerComponent]
})

export class ThemeTogglerModule { }
