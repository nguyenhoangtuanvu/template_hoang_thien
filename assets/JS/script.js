var scrollTopBtn = document.getElementById('scroll-top');
var navbar = document.querySelector('.navbar__wrapper');
var navbarMobile = document.querySelector('.header-mobile-wrapper');

window.onscroll = function() {

    // scroll top btn show/ hide
    let scrollPositon = window.scrollY;
    if (scrollPositon >= 100) {
        scrollTopBtn.style.display=  "block";
    }else {
        scrollTopBtn.style.display=  "none";
    }

    // header main fixed
    if(scrollPositon >= 126) {
        navbar.classList.add("navbar__fixed");
    } else {
        navbar.classList.remove("navbar__fixed");
    }

    // mobile fixed
    // if(scrollPositon >= 126) {
    //     navbarMobile.classList.add("header-mobile-fixed");
    // } else {
    //     navbarMobile.classList.remove("header-mobile-fixed");
    // }
}
// scroll top
scrollTopBtn.onclick = function() {
    window.scrollTo(0, 0);
}

// comment show / hide btn
var commentHideBtn = document.querySelector('.comment-nav-hide');
var commentShowBtn = document.querySelector('.comment-nav-show');
var commentBox = document.querySelector('#comment-box');
// $('.comment-nav-hide').onclick = function() {
//     console.log('.comment-nav-hide');
//     $('#comment-box').hide();
// }
// $('.comment-nav-show').onclick = function() {
//     $('#comment-box').show();
// }
commentHideBtn.onclick = function() {
    commentBox.style.display = 'none';
}
commentShowBtn.onclick = function() {
    commentBox.style.display = 'block';
}