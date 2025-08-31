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

// =========== Ai ya habebiiii ============
var aiBtn=document.getElementById("aiBtn");
var answer=document.getElementById("answer");
////////////////// Ai :) ///////////////////
var chosen1 =document.getElementById("chosen1");
var chosen2 =document.getElementById("chosen2");
var sea =document.getElementById("sea");
var desert =document.getElementById("desert");
var town =document.getElementById("town");
var africa =document.getElementById("africa");
var acia =document.getElementById("acia");
var europe =document.getElementById("europe");
var rec ="None";
var stop;
var letter=0;
///////////

///////////e
function aiRecommendation (){
  if (sea.checked && acia.checked) {
    rec="Indonesia";
  }else if (sea.checked && africa.checked){
    rec="Om Eldonia";
  }else if (sea.checked && europe.checked){
    rec="Italy";
  }
  ////////////////////////////////////
  else if (desert.checked && acia.checked){
    rec="Jordan";
  }else if (desert.checked && africa.checked){
    rec="Morocco";
  }else if (desert.checked && europe.checked){
    rec="Spain";
  }
  //////////////////////////////////
  else if (town.checked && acia.checked){
    rec="Emirates";
  }else if (town.checked && africa.checked){
    rec="South Africa";
  }else if (town.checked && europe.checked){
    rec="France";
  }else {
    rec="Choose Please"
  }
};


////////////////////////////////////////////////
aiBtn.addEventListener('click', function(){
  aiRecommendation ()
  setTimeout (function (){
        answer.innerHTML ="<h2>"+ rec +"</h2>";
        answer.style.scale ="1.2"
        // answer.style.background ="rgba(0, 140, 255, 0)"
        // answer.style.color ="red !important"
  },1000);
});











var modal1 = document.getElementById("myModal1");

    function openModal1() {
      modal1.style.display = "flex";
    }
    function closeModal1() {
      modal1.style.display = "none";
    }
    //////////////////////////////////////////
    
var modal2 = document.getElementById("myModal2");

    function openModal2() {
      modal2.style.display = "flex";
    }
    function closeModal2() {
      modal2.style.display = "none";
    }
    /////////////////////////////////////////
    
var modal3 = document.getElementById("myModal3");

    function openModal3() {
      modal3.style.display = "flex";
    }
    function closeModal3() {
      modal3.style.display = "none";
    }
    /////////////////////////////////////////
var modal4 = document.getElementById("myModal4");

    function openModal4() {
      modal4.style.display = "flex";
    }
    function closeModal4() {
      modal4.style.display = "none";
    }
    //////////////////////////////////////////
    
var modal5 = document.getElementById("myModal5");

    function openModal5() {
      modal5.style.display = "flex";
    }
    function closeModal5() {
      modal5.style.display = "none";
    }
    /////////////////////////////////////////
    
var modal6 = document.getElementById("myModal6");

    function openModal6() {
      modal6.style.display = "flex";
    }
    function closeModal6() {
      modal6.style.display = "none";
    }
    /////////////////////////////////////////
    window.onclick = function(e) {
      if (e.target === modal1) {
        closeModal1();
      }
      if (e.target === modal2) {
        closeModal2();
      }
      if (e.target === modal3) {
        closeModal3();
      }
      if (e.target === modal4) {
        closeModal4();
      }
      if (e.target === modal5) {
        closeModal5();
      }
      if (e.target === modal6) {
        closeModal6();
      }
    }