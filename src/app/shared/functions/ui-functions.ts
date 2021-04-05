import { Injectable } from "@angular/core";
import * as Feather from 'feather-icons';
declare var $: any;

@Injectable({
    providedIn: 'root'
})

export class UIFunctions {

   
    initFeather() {
        Feather.replace();
    }
    isDark:Boolean = false;
    //close the mobile menu list when a option is clicked
    toggleMobileMenu = function (el: any) {
        $(el).closest("ul").toggleClass("open");
        console.log($(el).closest("ul"));
    }

    //bug fix function to custom dropdown
    onSelectChange(event: any) {
        //console.log(event.target);
    }

    //open or close mobile menu list
    toggleNavMenu(menu: any) {
        $(menu).toggleClass('open');
    }

    //footer option
    toggleOptionMenu(menu: any) {
        document.querySelector(menu)?.classList.toggle('open');
    }

    //add event listner to close option list if it is opened by clicking anywhere on the document
    addOptionEventListener(btn: any, menu: any) {
        $(document).on('click', function (e: any) {
            if ($(e.target).closest(btn).length === 0
            ) {
                document.querySelector(menu)?.classList.remove('open');
            }
        });
    }

    changeTab = function (hash: any) {
        if (hash) {
            // find the link based on that hash
            var anchor = $("[href=" + hash + "]");

            // find the related content panel
            var div = $(hash);

            // activate correct anchor (visually)
            anchor.addClass("active").parent().siblings().find("a").removeClass("active");

            // activate correct div (visually)
            div.addClass("active").siblings().removeClass("active");

            // update URL, no history addition
            window.history.replaceState("", "", hash);

        }

        // Close menu, in case in dropdown state
        anchor.closest("ul").removeClass("open");
    }

    toggleMobileSearch(){
        $('.header-search-wrapper').toggleClass("open");
    }

    toggleTheme(){
        document.documentElement.classList.add('color-theme-in-transition')
        if(this.isDark){
            document.documentElement.setAttribute('data-theme','dark');
        }
        else{
            document.documentElement.setAttribute('data-theme','light');
        }
        window.setTimeout(function() {
          document.documentElement.classList.remove('color-theme-in-transition')
        }, 1000)
      }
}