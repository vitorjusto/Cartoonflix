$('.owl-carousel').owlCarousel({
    loop:false,
    margin:20,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

function abrirvideo()
{
    window.location="Video.html";
}

function abririnformacoes()
{
    window.location="Informações.html"
}

function maisInformacoes(n)
{
    window.location="informacoes" + n +".html"
}

function video(n)
{
    window.location="video" + n + ".html"
}
