function openPage(pageName, element, color = "#36225d"){
    //hide other tabs
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for(i = 0; i < tabcontent.length;i++){
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablink");
    for(i=0;i<tablinks.length;i++){
        tablinks[i].style.backgroundColor = "";
    }

    document.getElementById(pageName).style.display = "block";

    element.style.backgroundColor = color;
}


var slideIndex = 1;

function plusSlides(n, targetShow){
    console.log("plusSlides " + targetShow)
    showSlides(slideIndex += n,targetShow);
}

function currentSlide(n, targetShow){
    showSlides(slideIndex = n, targetShow);
}

function initSlideshows(){
    var SlideShows = document.getElementsByClassName('SlideshowContainer');
    console.log(SlideShows.length);
    for(var i = 0; i < SlideShows.length; i++){
        var targetShow = SlideShows[i].id.replace("SlideshowContainer","")
        showSlides(1, targetShow);
    }
}

function showSlides(n, targetShow){
    var i;

    var dirtySlides = document.getElementsByClassName('Slideshow');
    var cleanSlides = Array();
    for(i = 0; i<dirtySlides.length;i++)
    {
        if(dirtySlides[i].id == targetShow+'Slide'){
            cleanSlides.push(dirtySlides[i]);
        }
    }
    if(cleanSlides.length == 0){
        console.log("cleanSlides Error " + targetShow);
        return;
    }

    var dirtyDots = document.getElementsByClassName("SlideshowDot")
    var cleanDots = Array();
    for(i = 0; i<dirtyDots.length;i++)
    {
        if(dirtyDots[i].id == targetShow+'Dot'){
            cleanDots.push(dirtyDots[i]);
        }
    }
    if(cleanDots.length == 0){
        console.log("cleanDots Error " + targetShow);
        return;
    }

    if(n>cleanSlides.length){
        slideIndex = 1;
    }
    if(n<1){
        slideIndex = cleanSlides.length;
    }
    for(i=0; i < cleanSlides.length; i++){
        cleanSlides[i].style.display = "none"
    }
    for(i=0; i<cleanSlides.length; i++){
        cleanDots[i].className = cleanDots[i].className.replace(" SlideshowActive", "");
    }
    cleanSlides[slideIndex-1].style.display = "block";
    cleanDots[slideIndex-1].className += " SlideshowActive";
}