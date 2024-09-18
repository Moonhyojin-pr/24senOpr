FlowRouter.route('/', {
    action: function() {
        BlazeLayout.render('layout', {main: 'main'});
    }
})

Template.main.onRendered(function() {
    let slideIndex = 1;
    const container = this.find('.slideshow-container');
    
    if (container) {
      showSlides(slideIndex);
      
      // next/prev buttons
      container.querySelector('.prev').addEventListener('click', () => plusSlides(-1));
      container.querySelector('.next').addEventListener('click', () => plusSlides(1));
      
      // paging dots
      const pagingDots = container.querySelectorAll('.page');
      pagingDots.forEach((dot, index) => {
        dot.addEventListener('click', () => currentSlide(index + 1));
      });
    }
  
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
  
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
  
    function showSlides(n) {
      const slides = container.getElementsByClassName("mySlides");
      // const dots = container.getElementsByClassName("page");
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      // for (let i = 0; i < dots.length; i++) {
      //   dots[i].classList.remove("active");
      // }
      slides[slideIndex-1].style.display = "block";
      // dots[slideIndex-1].classList.add("active");
    }
  });