import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as Feather from 'feather-icons';
import { HelperFunctions } from 'src/app/shared/functions/helper';
import { UIFunctions } from 'src/app/shared/functions/ui-functions';
declare var $:any;

@Component({
  selector: 'app-complete-profile',
  templateUrl: './complete-profile.component.html',
  styleUrls: ['./complete-profile.component.scss']
})
export class CompleteProfileComponent implements OnInit {

  constructor(public ui:UIFunctions, public helper:HelperFunctions) { }
  submitted:Boolean = false;
  loading:Boolean = false;
  yearList:any[] = [];
  tab:number = 0;
  form = new FormGroup({
    role:new FormControl(null, {validators:[Validators.required]})
  })


  selectedValue:any;
  ngOnInit(): void {
    Feather.replace();
    this.yearList = this.helper.getYearList(20,2025,false)
    // $(document).ready(function(){
    //   $('select').niceSelect();
    // });

  // this.roleView = this.ui.selectHtml('.form-select-wrapper')
  }

  get role(){
    return this.form.get('role');
  }

  goToOrg(){
    this.tab = 0;
  }
  goToInterest(){
    this.tab = 1;
    this.submit();
  }

  submit(){
    this.submitted = true;
    console.log(this.form.value);
    if(this.form.valid){
      this.loading =true;
      setTimeout(()=>{
        this.submitted = false;
        this.loading = false;
      },1500)
    }
  }

 

}
