$ ('.header__ul > li') .on ('click',function(){
    $(this).children('.header__icon').toggleClass('header-rotate-icon');
});

$ ('.question__items>div') .on ('click',function(){
   $(this).children('.question_item_wrapper').toggleClass('active')
    $(this).next('.question__text').slideToggle(300);

})

