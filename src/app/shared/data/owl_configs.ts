export var profileCarousel: any = {
    loop: false,
    navSpeed: 700,
    nav: false,
    dots:false,
    margin:20,
    items:3,
    stagePadding:40,
    slideTransition: 'ease-out',
    
    responsiveClass: true,
    responsive: {
      0: {
        items:1,
        stagePadding:50

      },
      380:{
        items: 1,
        stagePadding:70
      },
      500:{
        items: 2,
        stagePadding:30
      },
      600: {
        items: 2,
        stagePadding:70
      },
      820:{
        items:3,
        stagePadding:20
      },
      991: {
        items:2,
        stagePadding:50
      },
      1091:{
        items:2,
        stagePadding:90
      },
      1350: {
        stagePadding: 50
      }
    },
}
