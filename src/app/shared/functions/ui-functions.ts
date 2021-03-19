import { Injectable } from "@angular/core";
import * as Feather from 'feather-icons';
declare var $: any;

@Injectable({
    providedIn: 'root'
})

export class UIFunctions {

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

    // pageLoadCorrectTab: function () {
    //     this.changeTab(document.location.hash);
    // },

    toggleMobileMenu = function (el: any) {
        $(el).closest("ul").toggleClass("open");
        console.log($(el).closest("ul"));
    }

    selectHtml(wrapper: any) {
        var wrapperRef = $(wrapper);
        wrapperRef.on('change', 'select', function (event: any) {
            var valueOuter = event.target.value;
            console.log(valueOuter);
            return valueOuter;
        });
    }

    onSelectChange(event: any) {
        //console.log(event.target);
    }

    initFeather() {
        Feather.replace();
    }

    toggleNavMenu(menu: any) {
        $(menu).toggleClass('open');
    }

    toggleOptionMenu(menu: any) {
        document.querySelector(menu)?.classList.toggle('open');
    }

    addOptionEventListener(btn: any, menu: any) {
        $(document).on('click', function (e: any) {
            if ($(e.target).closest(btn).length === 0
            ) {
                document.querySelector(menu)?.classList.remove('open');
            }
        });
    }

}