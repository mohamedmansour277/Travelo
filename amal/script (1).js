var currentSlide = 0;
var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.btn');
var dots = document.querySelectorAll('.dot');
var totalSlides = slides.length;
var slider = document.querySelector('.slider');
var autoPlay;

function showSlide(index) {
    for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }

    for (var i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }
    if (slides[index]) {
        slides[index].classList.add('active');
    }
    if (dots[index]) {
        dots[index].classList.add('active');
    }

    currentSlide = index;
}

function nextSlide() {
    var nextIndex = currentSlide + 1;
    if (nextIndex >= totalSlides) {
        nextIndex = 0;
    }
    showSlide(nextIndex);
}

function prevSlide() {
    var prevIndex = currentSlide - 1;
    if (prevIndex < 0) {
        prevIndex = totalSlides - 1;
    }
    showSlide(prevIndex);
}

function goToSlide(index) {
    showSlide(index);
}

function startAutoPlay() {
    if (autoPlay) {
        clearInterval(autoPlay);
    }
    autoPlay = setInterval(function () {
        nextSlide();
    }, 3000);
}
function stopAutoPlay() {
    if (autoPlay) {
        clearInterval(autoPlay);
        autoPlay = null;
    }
}
showSlide(0);

window.addEventListener('load', function () {
    setTimeout(function () {
        startAutoPlay();
    }, 500);
});

slider.addEventListener('mouseenter', function () {
    for (var i = 0; i < btns.length; i++) {
        btns[i].style.display = 'flex';
    }
    stopAutoPlay();
});

slider.addEventListener('mouseleave', function () {
    for (var i = 0; i < btns.length; i++) {
        btns[i].style.display = 'none';
    }
    startAutoPlay();
});
/* *****************journey********************** */
var plus = document.getElementsByClassName('journey1')[0];
var plus2 = document.getElementsByClassName('journey2')[0];
var plus3 = document.getElementsByClassName('journey3')[0];

var count = 0;
var count2 = 0;
var count3 = 0;

var interval1;
var interval2;
var interval3;

function countDown1() {
    if (count <= 500) {
        plus.querySelector('h4').innerHTML = "+" + count;
        count++;
    } else {
        clearInterval(interval1);
        console.log("Journey 1 countdown complete!");
    }
}

function countDown2() {
    if (count2 <= 5000) {
        plus2.querySelector('h4').innerHTML = "+" + count2;
        count2 += 10;
    } else {
        clearInterval(interval2);
        console.log("Journey 2 countdown complete!");
    }
}

function countDown3() {
    if (count3 <= 23) {
        plus3.querySelector('h4').innerHTML = "+" + count3;
        count3++;
    } else {
        clearInterval(interval3);
        console.log("Journey 3 countdown complete!");
    }
}

function startAllCounters() {
    clearInterval(interval1);
    clearInterval(interval2);
    clearInterval(interval3);

    countDown1();
    interval1 = setInterval(countDown1, 10);

    countDown2();
    interval2 = setInterval(countDown2, 10);

    countDown3();
    interval3 = setInterval(countDown3, 230);
}

document.addEventListener("DOMContentLoaded", function () {
    var counterSection = document.querySelector('.counter');

    var observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                startAllCounters();
                observer.unobserve(counterSection);
            }
        });
    }, {
        threshold: 0.5
    });

    observer.observe(counterSection);
});
/* *****************email********************** */

emailjs.init("lNgIYQ5Dz21bek-gV");

function toggleEmail() {
    var icon = document.getElementById("toggleIcon");
    var input = document.getElementById("emailInput");
    var statusText = document.getElementById("statusText");
    var emailValue = input.value.trim();


    statusText.style.display = "none";
    statusText.className = "";

    if (!input.checkValidity()) {
        statusText.innerText = "Please enter a valid Gmail or Yahoo address";
        statusText.style.display = "inline";

        icon.className = "fa fa-times-circle toggleEmail";
        icon.style.color = "red";
        return;
    }


    icon.className = "fa fa-spinner fa-spin toggleEmail";
    statusText.innerText = "Sending...";
    statusText.style.display = "inline";


    var templateParams = {
        to_email: emailValue,
        name: emailValue.split('@')[0],
        time: new Date().toLocaleString(),

        subject: "Welcome to Travelo – Your Journey Begins!",
        message: ` 
Welcome aboard! We're beyond excited to have you join our Travelo family – where every trip turns into an unforgettable story.  

To kickstart your journey, here’s a special gift:  
**15% OFF your first booking!**  
Use code: **WELCOME15** – valid for 30 days.  

Imagine waking up to the sound of waves in Bali, hiking breathtaking trails in Patagonia, or wandering through the colorful streets of Morocco. Where will your first adventure take you?  

Ready to explore? Your dream trip is just a click away.  

Happy travels,  
The Travelo Crew ✈️
                `
    };

    emailjs.send("service_v328r64", "template_3makl72", templateParams)
        .then(() => {
            icon.className = "fa fa-check-circle toggleEmail";
            icon.style.color = "green";
            statusText.innerText = "Email sent successfully! Check your inbox.";
            statusText.style.display = "inline";
        })
        .catch((error) => {
            console.error('EmailJS Error:', error);
            icon.className = "fa fa-times-circle toggleEmail";
            icon.style.color = "red";
            statusText.innerText = "Failed to send. Please try again.";
            statusText.style.display = "inline";
        });
}





var currentSlide2 = 0;
var slides2 = document.querySelectorAll('.slide2');
var btns2 = document.querySelectorAll('.btn2');
var dots2 = document.querySelectorAll('.dot2');
var totalSlides2 = slides2.length;
var slider2 = document.querySelector('.slider2');
var autoPlay2;

function showSlide2(index) {
    slides2.forEach(slide => slide.classList.remove('active2'));
    dots2.forEach(dot => dot.classList.remove('active2'));

    if (slides2[index]) slides2[index].classList.add('active2');
    if (dots2[index]) dots2[index].classList.add('active2');

    currentSlide2 = index;
}

function nextSlide2() {
    var nextIndex2 = (currentSlide2 + 1) % totalSlides2;
    showSlide2(nextIndex2);
}

function prevSlide2() {
    var prevIndex2 = (currentSlide2 - 1 + totalSlides2) % totalSlides2;
    showSlide2(prevIndex2);
}

function goToSlide2(index) {
    showSlide2(index);
}

function startAutoPlay2() {
    if (autoPlay2) clearInterval(autoPlay2);
    autoPlay2 = setInterval(nextSlide2, 3000);
}

function stopAutoPlay2() {
    if (autoPlay2) {
        clearInterval(autoPlay2);
        autoPlay2 = null;
    }
}

showSlide2(0);

window.addEventListener('load', function () {
    setTimeout(startAutoPlay2, 500);
});

slider2.addEventListener('mouseenter', function () {
    btns2.forEach(btn => btn.style.display = 'flex');
    stopAutoPlay2();
});

slider2.addEventListener('mouseleave', function () {
    btns2.forEach(btn => btn.style.display = 'none');
    startAutoPlay2();
});

var openMenu = document.getElementById('openMenu');
var closeMenu = document.getElementById('closeMenu');
var navLinks = document.getElementById('navLinks');

openMenu.addEventListener('click', function () {
  navLinks.classList.add('active');
  openMenu.style.display = 'none';
  closeMenu.style.display = 'block';
});

closeMenu.addEventListener('click', function () {
  navLinks.classList.remove('active');
  closeMenu.style.display = 'none';
  openMenu.style.display = 'block';
});


// ========== Dark Mode ==========
var toggle = document.getElementById("darkToggle");
var hh2 = document.querySelectorAll("h2");
var ppp = document.querySelectorAll("p");
var secBack = document.querySelectorAll("section");
var feedBack = document.querySelectorAll(".testimonial-card");
// var traveloH2 =document.getElementsByTagName("h2")[0,1,2,3];

window.addEventListener("DOMContentLoaded", function () {
  var darkOn = localStorage.getItem("dark-mode") === "true";
  if (darkOn) {
    document.body.classList.add("darkModeBody");
    toggle.classList.add("active");
    // traveloH2.classList.add("traveloH2DarkMode");
    hh2.forEach(h2 => {
    h2.classList.add("traveloH2DarkMode");
    });
    // ppp.forEach(p => {
    // p.classList.add("pDarkMode");
    // });
    secBack.forEach(section => {
    section.classList.add("secDarkMode");
    });
    feedBack.forEach(div => {
    div.classList.add("secDarkMode");
    });
  }
});
toggle.addEventListener("click", function () {
  hh2.forEach(h2 => {
    h2.classList.toggle("traveloH2DarkMode");
  });
  // ppp.forEach(p => {
  //   p.classList.toggle("pDarkMode");
  // });
  secBack.forEach(section => {
    section.classList.toggle("secDarkMode");
  });
  feedBack.forEach(div => {
    div.classList.toggle("secDarkMode");
  });
  // traveloH2.classList.toggle("traveloH2DarkMode");
  toggle.classList.toggle("active");
  document.body.classList.toggle("darkModeBody");
  // hh2.classList.toggle("hh2DarkMode");
  var isDark = document.body.classList.contains("darkModeBody");
  localStorage.setItem("dark-mode", isDark);
  // circle.classList.toggle("circleToggle");
});