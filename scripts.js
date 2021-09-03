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
    showSlides(slideIndex += n,targetShow);
}
