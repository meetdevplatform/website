import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Interests } from 'src/app/shared/data/interests';
import { UIFunctions } from 'src/app/shared/functions/ui-functions';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit {

  constructor(public ui: UIFunctions, public mockInterests: Interests) { }
skills:any [] = [];
interests:any[] = [];

  ngOnInit(): void {
    this.interests = this.mockInterests.data;
    this.ui.initFeather();
  }
 

  profileForm = new FormGroup({
    full_name: new FormControl(null,{validators:[Validators.required]}),
    location: new FormControl(null,{validators:[Validators.required]}),
    bio:  new FormControl(null,{validators:[Validators.required]}),
    role:new FormControl(null,{validators:[Validators.required]}),
    interested_in: new FormArray([])
  })


  get selectedInterests(){
    return this.profileForm.get('interested_in') as FormArray;
  }

  show(value:any){
    console.log(value);
  }

}
