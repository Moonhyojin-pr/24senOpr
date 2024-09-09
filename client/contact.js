FlowRouter.route('/contact', {
    action: function() {
        BlazeLayout.render('layout', {main: 'contact'});
    }
})

//slide, paging (0908)

// let silideIndex = 1;
// showSlides(silideIndex);

// function plusSlides(n){
//     showSlides(slideIndex +=n);
// }

// function currentSlide(n){
//     showSlides(slideIndex +=n);
// }

// function showSlides(n) {
//     let i;
//     let slides =document.getElementsByClassName("mySlides");
//     let pages = document.getElementsByClassName("page");
//     if (n > slides.length) {slideIndex = 1}
//     if (n < 1) {slideIndex = slides.length}
//     for (i =0; i < slides.length; i++) {
//         slides[i].computedStyleMap.display = "none";
//     }
//     for (i = 0; i< pages.length; i++) {
//         pages[i].className = pages[i].className.replace(" active", "");
//     }
//     slides[slideIndex-1].computedStyleMap.display = "block";
//     pages[slideIndex-1].className += " active";
// }