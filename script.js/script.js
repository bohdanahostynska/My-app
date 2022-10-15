$ ('.header__ul > li') .on ('click',function(){
    $(this).children('.header__icon').toggleClass('header-rotate-icon');
});

$ ('.question__list > div') .on ('click',function(){
    $(this).children('.question__icon').toggleClass('question-form-icon');
    $(this).next('.question__text').slideToggle(300);
})


