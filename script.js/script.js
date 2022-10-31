$ ('.header__ul > li') .on ('click',function(){
    $(this).children('.header__icon').toggleClass('header-rotate-icon')
    onclick="this.classList.toggle('open')"
});

$ ('.question__items>div') .on ('click',function(){
   $(this).children('.question_item_wrapper').toggleClass('active')
    $(this).next('.question__text').slideToggle(300);

});

//https://api.telegram.org/bottoken/getUpdates

$('#button') .on('click',function(e){
    e.preventDefault();

    let name=$('#name').val().trim();
    let email=$('#email').val().trim();

    if(name==''){
        $('#error-name').text('Enter your name')
    }else if(email==''){
        $('#error-email').text('Enter your email')
    }

console.log('DFGDF');
    $.ajax({
        url:'ajax/telegram.php',
        type:'POST',
        cache:false,
        data:{'email':email,'name':name},
        dataType:'html',
        success:function(){
            $('#name').val('');
            $('#email').val('');
        }

    })
})



