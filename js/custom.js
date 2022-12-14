
const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = './icon-img/menuuu.png';
    } else {
        navBtnImg.src = "./icon-img/menu-open.png";
    }
};

$( function() {
    var availableTags = [
    "Allentown, New Mexico",
    "Afghanistan, Kabul",
    "Albania, Tirana",
    "Algeria, Algiers",
    "Andorra, Andorra la Vella",
    "Bangladesh, Dhaka",
    "Barbados, Bridgetown",
    "Belgium, Brussels",
    "Belize, Belmopan",
    "Botswana, Gaborone",
    "Kiribati, Tarawa",
    "Liechtenstein, Vaduz ",
    "Lithuania, Vilnius",
    "Norway, Oslo",
    "Poland, Warsaw ",
    "Qatar, Doha",
    "Senegal, Dakar",
    "Seychelles, Victoria"
    ];
    $( "#tags" ).autocomplete({
        source: availableTags
    });
} );


$( function(){

    $( "#datepicker" ).datepicker({
        showOn: "button",
        buttonImage: "icon-img/calendar-2.svg",
        buttonImageOnly: true,
        buttonText: "Select date"
    });

});


$(function(){

    $('.places_slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        speed: 500,
        easing: 'ease',
        responsive: [
            {
            breakpoint: 1320,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                arrows: true,
                dots: true
                }
            }
        ]
    });

});

