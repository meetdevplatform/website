import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnologyCardComponent } from './technology-card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TechnologyCardComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[TechnologyCardComponent]
})
export class TechnologyCardModule { }
