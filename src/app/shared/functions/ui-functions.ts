import { Injectable } from "@angular/core";
declare var $: any;

@Injectable({
    providedIn: 'root'
})

export class UIFunctions {

        changeTab = function (hash: any) {
            if(hash){
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

        // pageLoadCorrectTab: function () {
        //     this.changeTab(document.location.hash);
        // },

        toggleMobileMenu = function (el: any) {
            $(el).closest("ul").toggleClass("open");
            console.log($(el).closest("ul"));
        }

}