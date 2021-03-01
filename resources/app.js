
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




// Contact Us Animation 

const inputs = document.querySelectorAll(".input");
//adds focus class to our input-containers
function addFocus() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}
//removes focus if there is no value in form
function removeFocus () {
    let parent = this.parentNode;
    if (this.value === "") {
    parent.classList.remove("focus");
    } 
}

inputs.forEach((input) => {
    input.addEventListener("focus", addFocus); // note to self. eventlisteners only take in function declarations
    input.addEventListener("blur", removeFocus);
})

window.addEventListener("DOMContentLoaded", function() {

    // get the form elements defined in your form HTML above
    
    var form = document.getElementById("form");
    var button = document.getElementById("my-form-button");
    var status = document.getElementById("status");

    // Success and Error functions for after the form is submitted
    
    function success() {
      form.reset();
      
      status.style.display = "";
      status.innerHTML = "Thanks! We'll get in touch soon.";
    }

    function error() {
      status.innerHTML = "Oops! There was a problem.";
    }

    // handle the form submission event

    form.addEventListener("submit", function(ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  
  // helper function for sending an AJAX request

  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }

