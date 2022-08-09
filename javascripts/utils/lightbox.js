class Lightbox {
  constructor(currentSlide, element, options = {}) {
    this.element = element;
    this.options = Object.assign({}, { slidesToScroll: 1, slidesVisible: 1 }, options);
    this.currentSlide = currentSlide;
    this.slideTo(this.currentSlide);
    this.navigation();
  }
  
  navigation() {
    prevNavigation.addEventListener("click", this.prev.bind(this)); 
    nextNavigation.addEventListener("click", this.next.bind(this));

    
    lightboxDisplay.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") {
        this.prev();
      }
      if (e.key === "ArrowRight") {
        this.next();
      }
      if (e.key === "Escape") {
        closeLightbox();
      }
    });
  }

  
  next() {
    this.slideTo(this.currentSlide + this.options.slidesToScroll);
  }

  
  prev() {
    this.slideTo(this.currentSlide - this.options.slidesToScroll);
  }

  
  slideTo(index) {
    if (index < 0) {
      index = this.element - this.options.slidesVisible;
    } else if (index > this.element - this.options.slidesVisible) {
      index = 0;
    }

    const lightboxContainer = document.getElementById("lightbox-container");

    let ratioSlider = (index * -100) / this.element; 
    let ratioWidth = 100 * this.element; 
    lightboxContainer.style.transform = "translateX(" + ratioSlider + "%)"; 
    lightboxContainer.style.width = ratioWidth + "%";
    this.currentSlide = index;
  }
}

const lightboxDisplay = document.getElementById("lightbox");
const prevNavigation = document.getElementById("prev");
const nextNavigation = document.getElementById("next");


function openLightbox() {
  lightboxDisplay.style.display = "block";
  main.setAttribute("aria-hidden", true);
  lightboxDisplay.setAttribute("aria-hidden", false);
  prevNavigation.focus();
}

function closeLightbox() {
  lightboxDisplay.style.display = "none";
  main.setAttribute("aria-hidden", false);
  lightboxDisplay.setAttribute("aria-hidden", true);
  logo.focus();
}