import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { UIFunctions } from 'src/app/shared/functions/ui-functions';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit {

  constructor(public ui: UIFunctions) { }
skills:any [] = [];
  ngOnInit(): void {
    this.ui.initFeather();
  }

  profileForm = new FormGroup({
    name: new FormControl(null,{validators:[Validators.required]}),
    location: new FormControl(null,{validators:[Validators.required]}),
    bio:  new FormControl(null,{validators:[Validators.required]}),
    role:new FormControl(null,{validators:[Validators.required]}),
    interested_in: new FormArray([])
  })


  get interests(){
    return this.profileForm.get('interested_in') as FormArray;
  }
}
