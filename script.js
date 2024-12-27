<<<<<<< HEAD

  const carousel = document.getElementById("carouselImages");
  const prevSlide = document.getElementById("prevSlide");
  const nextSlide = document.getElementById("nextSlide");

  let currentIndex = 0;
  const totalSlides = carousel.children.length;
  const displayDuration = 2000; // Waktu tampilan per gambar (5 detik)
  let slideTimeout;

  // Fungsi untuk memperbarui posisi carousel
  function updateCarousel() {
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
  }

  // Fungsi untuk berpindah ke slide berikutnya
  function goToNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
    restartAutoSlide(); // Restart auto-slide setiap berpindah slide
  }

  // Fungsi untuk berpindah ke slide sebelumnya
  function goToPrevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
    restartAutoSlide(); // Restart auto-slide setiap berpindah slide
  }

  // Fungsi untuk memulai perpindahan otomatis
  function startAutoSlide() {
    slideTimeout = setTimeout(() => {
      goToNextSlide();
    }, displayDuration);
  }

  // Fungsi untuk menghentikan perpindahan otomatis
  function stopAutoSlide() {
    clearTimeout(slideTimeout);
  }

  // Fungsi untuk restart perpindahan otomatis
  function restartAutoSlide() {
    stopAutoSlide();
    startAutoSlide();
  }

  // Event listener tombol panah
  prevSlide.addEventListener("click", goToPrevSlide);
  nextSlide.addEventListener("click", goToNextSlide);

  // Mulai perpindahan otomatis saat halaman dimuat
  startAutoSlide();

=======
// Script File

// Home Section Starts
var menuBtn = document.querySelector('.main-navbar .menu-btn');
var menuList = document.querySelector('.main-navbar .nav-list');
var menuListItems = document.querySelectorAll('.nav-list li a');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menuList.classList.toggle('active');
});

for(var i = 0; i < menuListItems.length; i++){
	menuListItems[i].addEventListener('click', menuItemClicked);
}
function menuItemClicked(){
	menuBtn.classList.remove('active');
	menuList.classList.remove('active');
}

var homeSection = document.querySelector('.home');
window.addEventListener('scroll', pageScrollFunction);
window.addEventListener('load', pageScrollFunction);

function pageScrollFunction(){
	if(window.scrollY > 120){
		homeSection.classList.add('active');
	}
	else{
		homeSection.classList.remove('active');
	}
}
// Home Section Ends

// Partners Section Starts 
$('.partners-slider').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    margin:10,
    nav:true,
    navText:["<i class='fa-solid fa-arrow-left'></i>",
             "<i class='fa-solid fa-arrow-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        500:{
            items:2
        },
        700:{
            items:3
        },
        1000:{
        	items:5
        }
    }
})
// Partners Section Ends 

// Testimonials Section Starts
$('.testimonials-slider').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:6000,
    margin:10,
    nav:true,
    navText:["<i class='fa-solid fa-arrow-left'></i>",
             "<i class='fa-solid fa-arrow-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        }
    }
})
// Testimonials Section Ends

// login
>>>>>>> ccf1785 (Initial commit)
