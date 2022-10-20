const feedback = $(".feedback__list") .bxSlider ( {
    pager:false,
    controls:false,
    infiniteLoop:true,
    touchEnabled:true,
    hideControlOnEnd:false,
    slideWidth:true,
});

$('.button--prev') .click((e)=>{
    e.preventDefault(),
   feedback.goToPrevSlide()
});

$('.button--next') .click((e)=>{
    e.preventDefault(),
    feedback.goToNextSlide()
})