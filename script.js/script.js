$ ('.header__ul > li') .on ('click',function(){
    $(this).children('.header__icon').toggleClass('header-rotate-icon');
});

$ ('.question__items > div') .on ('click',function(){
    $(this).next('.question__text').slideToggle(300);
})

