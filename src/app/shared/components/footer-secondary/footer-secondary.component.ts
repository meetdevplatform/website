import { Component, OnInit } from '@angular/core';
import { UIFunctions } from '../../functions/ui-functions';
declare var $:any;

@Component({
  selector: 'footer-secondary',
  templateUrl: './footer-secondary.component.html',
  styleUrls: ['./footer-secondary.component.scss']
})
export class FooterSecondaryComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
    $('.link-gray').on("click", this.toggleMenu);
    
    $(document).on('click', function (e:any) {
      if ($(e.target).closest(".toggle-btn").length === 0
      ) {
          $("#footer-mobile-menu").removeClass('open');
      }
  });

  }
  
  toggleMenu(){
    document.getElementById('footer-mobile-menu')?.classList.toggle('open');
  }

}
