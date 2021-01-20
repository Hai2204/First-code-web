function initMap() {
    //u location
    const loc = { lat: 17.235101, lng: 106.759949 };
    //centered map on location
    const map = new google.maps.Map(document.querySelector('.map'),{
        zoom: 14,
        center: loc
    });
    //the market,positioned at location
    const marker = new google.maps.Marker({ position: loc, map:map });
  }
  
  $(window).scroll(function(){
    let position = $(this).scrollTop();
    console.log(position);
    
    if(position >= 150){
        $('.nav-menu').addClass('custom-navbar');
    } else{
        $('.nav-menu').removeClass('custom-navbar');
    }
});