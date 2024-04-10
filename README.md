Logika wyboru produktów:

W templatce produktowej z obiektu "product" (product.collections)wyciągam informacje do jakich nalezy dany produkt następnie pętlą foreach sprawdzam produkty(collection.products) w kolekcjach z nich "handle" z produktów które zawierają tag "bestseller" i konwertuje do tablicy aby nastepnie wyswietlic dany produkt w sliderze z uzyciem globalnej zmiennej all_products.

Swiper dodaje do templatki poprzez dodanie kodu ze strony https://swiperjs.com/get-started do assest templatki aby nie google page speed nie obnizał punktów ze względu na wczytywania zewnetrznych źródeł. 

zgodznie z dokumentacja wywoluje slider responsywny lazy loadingiem obrazów

{
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
  }


  Niestety ale na brak czasu w tym tygodniu slider wykonałem na podstawie templatki Dawn z wykorzystaniem sekcji featured collection
