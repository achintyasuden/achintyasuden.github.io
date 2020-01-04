window.addEventListener("scroll", function() {
  const logoImage = document.querySelector(".logo img");
  const mainNav = document.getElementById("mainNav");
  const guitarImage = document.querySelector(".guitar img");
  const logos = document.querySelectorAll(".fa");
  const sideNav = document.getElementById("sideNav");

  if(window.pageYOffset > 0){
    logoImage.style.height = "64px";
    mainNav.classList.add("bg-change");
    mainNav.classList.add("txt-white");
    sideNav.classList.add("sidenavshift");
    guitarImage.classList.add('guitarRotate1');


    var i;
    for (i = 0; i < logos.length; i++) {
        logos[i].classList.add("bg-remove")
        logos[i].classList.add("logo-shift");
    }


  }



   else {
    logoImage.style.height = "84px";
    mainNav.classList.remove("bg-change");
    mainNav.classList.remove('txt-white');
    guitarImage.classList.remove('guitarRotate1');
    guitarImage.classList.add('guitarRotate2');
    sideNav.classList.remove("sidenavshift");
    sideNav.classList.add("logorevert");

    var i;
    for (i = 0; i < logos.length; i++) {
        logos[i].classList.remove("bg-remove");
        logos[i].classList.remove("logo-shift");
        logos[i].classList.add('logorevert');
    }
  }
});





/* Top function */

function topFunction() {
  document.documentElement.scrollTop = 0;
}





/* Width of each carousel image, in pixels */
let carouselWidth = 500;

/* Part 2.1: Get the elements */
let prevButton = document.getElementById('button-previous');
let nextButton = document.getElementById('button-next');
let imageRow = document.getElementById('carousel-image-row');

/* Part 2.2: Create variable to keep track of which image we're on */
let imageNum = 0;

/* Part 2.3: The showNextImage function should shift the image row to the left */
function showNextImage() {
	imageNum++;
	checkControls();
	let newPixelOffset = -carouselWidth * imageNum;
	imageRow.style.left = newPixelOffset + "px";
}

/* Part 2.4: Change the onclick property for the next button */
nextButton.onclick = showNextImage;
/* Part 2.5: The showPrevImage function should shift the image row to the right */
function showPrevImage() {
	// change imageNum
	imageNum = imageNum - 1;
	checkControls();
	// how many pixels from the left should imageRow now be?
	let newPixelOffset_two = -carouselWidth * imageNum;
	// change css for imageRow
	imageRow.style.left = newPixelOffset_two + "px";
}

/* Part 2.6: Change the onclick property for the prev button */
prevButton.onclick = showPrevImage;

/* Total number of images */
let totalImages = document.getElementsByClassName("carousel-image").length;

/* Part 2.7 */
function checkControls() {
	// This if-statement checks if we're at the first image.
	// In the parentheses below, check what imageNum is equal to.
	if (imageNum === 0) {
		// What should happen if it's the first image?
		prevButton.classList.add("hidden");
	}
	else if (prevButton.classList.contains("hidden")) {
		// otherwise, what should happen?
		prevButton.classList.remove("hidden");
	}
	// This if-statement checks if we're at the last image.
	// In the parentheses below, check what imageNum is equal to.
	if (imageNum === totalImages - 1) {
		// What should happen it's the last image?
	nextButton.classList.add("hidden");
	}
	else if (nextButton.classList.contains("hidden")) {
		// otherwise, what should happen?
	nextButton.classList.remove("hidden");
	}
}
