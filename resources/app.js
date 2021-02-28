
// Toggle Burger Menu
 function navSlide() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    
    burger.addEventListener("click", () => {
        //Toggle NavBar
        nav.classList.toggle("nav-active");
        
        //Animates the Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle("toggle");
    });
    
}

 navSlide();

 
// LightBox/Modal Functionality
let slideIndex = 1;
    //Opens Lightbox
const openModal = () => {
    document.getElementById("myModal").style.display = "block";
    document.body.style.overflow = "hidden";
}

const closeModal = () => {
    document.getElementById("myModal").style.display = "none";
    document.body.style.overflow= "";
}


//Slide Controller Function 

const showSlides = (n) => {
    let slides = document.getElementsByClassName("modalSlides");
    let thumbnails = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < thumbnails.length; i++) {
        thumbnails[i].className = thumbnails[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";
    thumbnails[slideIndex-1].className += " active";
    captionText.innerHTML = thumbnails[slideIndex-1].alt;
}

//Setting default slide param

showSlides(slideIndex); // invoking the function with our default

// arrow functions 
const plusSlides = (n) => {
    showSlides(slideIndex += n);
}

// Thumbnail shortcut
const currentSlide = (n) => {
    showSlides(slideIndex = n);
}
