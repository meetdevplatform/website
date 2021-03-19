import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationFormComponent } from './organization-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NiceSelectModule } from 'ng-nice-select';



@NgModule({
  declarations: [OrganizationFormComponent],
  imports: [
    CommonModule,
    NiceSelectModule,
    FormsModule,ReactiveFormsModule
  ],
  exports:[OrganizationFormComponent]
})
export class OrganizationFormModule { }
