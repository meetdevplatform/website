import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Interests } from 'src/app/shared/data/interests';
import { UIFunctions } from 'src/app/shared/functions/ui-functions';
declare var $:any;

@Component({
  selector: 'app-select-interests',
  templateUrl: './select-interests.component.html',
  styleUrls: ['./select-interests.component.scss']
})
export class SelectInterestsComponent implements OnInit {

  interests:any[] = [];
  loading:boolean = false;
  submitted:Boolean = false;

  constructor(public interestData:Interests, public ui:UIFunctions, public router:Router) { }
  selectedInterests:any[] = [];
  ngOnInit(): void {
    this.ui.initFeather();
    this.interests = this.interestData.data;
  }

  toggleInterest(interest:any, i:number){
    $(`#interest-${i}`).toggleClass('selected');

    var index  = this.selectedInterests.indexOf(interest);
    if(index!==-1) this.selectedInterests.splice(index,1);
    else this.selectedInterests.push(interest);

    console.log("Updated Interests - ", this.selectedInterests);
  }

  submitInterests(){
    this.submitted = true;
    if(this.selectedInterests.length >= 5){
      this.loading = true;
      setTimeout(()=>{
        this.loading = false;
        this.submitted = false;
        this.router.navigate(['/'])
      }, 1500)
    }
    
   
  }



}
