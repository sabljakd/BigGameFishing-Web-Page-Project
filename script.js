function initMap() {
  const location = {lat: 44.873810, lng: 13.860450};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: location
  });

  var marker = new google.maps.Marker({
    position: location,
    map: map
  });
}

const dropdownBtn = document.querySelector('.dropbtn')
const dropdownToggle = document.querySelector('.nav-item-dropdown');
const dropdownContent = document.querySelector('.dropdown-content');
const dropdownIcon = document.querySelector('.fa-caret-down');

const navItems = document.querySelectorAll('.nav-item')
const allLinks = document.querySelectorAll('.nav > * a');

dropdownContent.style.opacity = 0;

dropdownToggle.addEventListener("click", function(e) {
  if(dropdownContent.classList.contains('hide')) {
    dropdownContent.classList.remove('hide');
    dropdownContent.classList.add('show');
    setTimeout(function(){
      dropdownContent.style.opacity = 1;
    }, 50);
    dropdownIcon.style.transform = 'rotate(180deg)';

  } else {
    dropdownContent.classList.remove('show');
    dropdownContent.style.opacity = 0;
    setTimeout(function(){
      dropdownContent.classList.add('hide');
    }, 400);
    dropdownIcon.style.transform = 'rotate(0deg)';
  }
});

document.addEventListener('click', function(e) {
  if(e.target !== dropdownToggle && e.target !== dropdownBtn) {
    dropdownContent.style.opacity = 0;
    setTimeout(function(){
      dropdownContent.classList.add('hide');
    }, 400);    dropdownIcon.style.transform = 'rotate(0deg)';
  }
});

allLinks.forEach(item => {
  item.addEventListener('click', function(e) {
    navItems.forEach(item1 => {
      item1.classList.remove('active');
    })

    item.closest('.nav-item').classList.add('active');
  });
})

dropdownToggle.addEventListener("mouseenter", function(e) {
  if(dropdownContent.classList.contains('hide')) {
    dropdownContent.classList.remove('hide');
    dropdownContent.classList.add('show');
    setTimeout(function(){
      dropdownContent.style.opacity = 1;
    }, 50);
    dropdownIcon.style.transform = 'rotate(180deg)';

  } else {
    dropdownContent.classList.remove('show');
    dropdownContent.style.opacity = 0;
    setTimeout(function(){
      dropdownContent.classList.add('hide');
    }, 400);
    dropdownIcon.style.transform = 'rotate(0deg)';
  }
});

dropdownToggle.addEventListener("mouseleave", function(e) {
  if(dropdownContent.classList.contains('hide')) {
    dropdownContent.classList.remove('hide');
    dropdownContent.classList.add('show');
    setTimeout(function(){
      dropdownContent.style.opacity = 1;
    }, 50);
    dropdownIcon.style.transform = 'rotate(180deg)';

  } else {
    dropdownContent.classList.remove('show');
    dropdownContent.style.opacity = 0;
    setTimeout(function(){
      dropdownContent.classList.add('hide');
    }, 400);
    dropdownIcon.style.transform = 'rotate(0deg)';
  }
});

// Slider

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

const contactMeBtn = document.querySelectorAll('.js--btn');
const contactLink = document.querySelector('.js--contact');

contactMeBtn.forEach(item => {
  contactMeBtn.addEventListener('click', function() { 
    contactLink.classList.add('.active');
  });
});
