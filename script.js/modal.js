    $('.main__tube ').on('click',function(){
        $(this).fadeOut();
    }),
    
    $('#open-tube').on('click',function(){
        $('.main__tube').fadeIn();
    })
    
    $('#open--tube').on('click',function(){
        $('.main__tube').fadeIn();
    }),

    $('#open-tube').on('click',function(){
        $('.main__tube').fadeIn();
    }),

    $('.modal-overlay').on('click',function(e){
        if($(e.target).closest('.modal').length==0){
            $(this).fadeOut();
        }
    });
    
    $('.modal-close').on('click',function(){
        $(this).parents('.modal-overlay').fadeOut()
    })
    
    $('#open-modal').on('click',function(){
        $('.modal-overlay').fadeIn()
    })