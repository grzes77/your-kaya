
new Swiper(".custom-featured-colletion-swiper", {
    slidesPerView: 1,    
    slidesPerGroup: 1, 
    spaceBetween: 15,
    loop: false,    
    observer: true,  
    observeParents: true,
    speed: 500,
    lazy: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {               
        600: {
            slidesPerView: 2,
            slidesPerGroup: 2, 
        },
        
        900: {
            slidesPerView: 3,
            slidesPerGroup: 3, 
        },
        1200: {
            slidesPerView: 4,
            slidesPerGroup: 4, 
        }
    }
  });