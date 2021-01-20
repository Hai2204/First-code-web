$(window).scroll(function(){
    let position = $(this).scrollTop();
    console.log(position);
    
    if(position >= 50){
        $('.nav-menu').addClass('custom-navbar');
        $('.img').addClass('img1');
    } else{
        $('.nav-menu').removeClass('custom-navbar');
        $('.img').removeClass('img1');
    }
});

