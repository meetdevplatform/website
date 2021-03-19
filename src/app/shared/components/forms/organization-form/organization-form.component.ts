import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HelperFunctions } from 'src/app/shared/functions/helper';
import { UIFunctions } from 'src/app/shared/functions/ui-functions';

@Component({
  selector: 'organization-form',
  templateUrl: './organization-form.component.html',
  styleUrls: ['./organization-form.component.scss']
})
export class OrganizationFormComponent implements OnInit {

  @Output() signalSubmit = new EventEmitter;
  selectedValue:any;
  submitted:Boolean = false;
  loading:Boolean = false;
  yearList:any[] = [];
  form = new FormGroup({
    role:new FormControl(null, {validators:[Validators.required]})
  })

  constructor(public helper:HelperFunctions, public ui:UIFunctions) { }

  ngOnInit(): void {
    this.yearList = this.helper.getYearList(20,2025,false)
  }

  get role(){
    return this.form.get('role');
  }

  submit(){
    this.submitted = true;
    if(this.form.valid){
      this.loading =true;
      setTimeout(()=>{
        this.submitted = false;
        this.loading = false;
        this.signalSubmit.emit(this.form.value);
      },1500)
    }
  }

}
