import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UIFunctions } from 'src/app/shared/functions/ui-functions';

@Component({
  selector: 'app-post-social',
  templateUrl: './post-social.component.html',
  styleUrls: ['./post-social.component.scss']
})
export class PostSocialComponent implements OnInit {

  tab: number = 0;
  constructor(public router: Router, public ui:UIFunctions) { }

  ngOnInit(): void {
    this.ui.initFeather();
  }

  getOrgDetails(formValue: any) {
    console.log(formValue);
      this.router.navigate(['/complete-profile/interests']);
  }

  goToBasic() {
    this.tab = 0;
  }

  goToOrg() {
    this.tab = 1;
  }

}
