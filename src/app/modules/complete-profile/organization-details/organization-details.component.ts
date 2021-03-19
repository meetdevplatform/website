import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-organization-details',
  templateUrl: './organization-details.component.html',
  styleUrls: ['./organization-details.component.scss']
})
export class OrganizationDetailsComponent implements OnInit {

  constructor(public router:Router) { }
 

 
  ngOnInit(): void {
   
  }

 
  submitForm(formValue:any){
    console.log(formValue)
    this.router.navigate(['/complete-profile/interests'])
  }




}
