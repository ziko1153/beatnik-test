// Family Nav List
const familyNavlist = document.querySelectorAll(".family-nav ul");
const familyBodyTitle = document.getElementsByClassName("family-body-title")[0];

// Iterate Nav List
familyNavlist.forEach(nav => {
  nav.addEventListener("click", e => {
    if (e.target.tagName === "UL") return;

    const subEl = e.target.tagName === "A" ? e.target.parentNode : e.target;

    familyBodyTitle.innerText = subEl.textContent;
    removeAllActiveClass();
    subEl.classList.toggle("active");
  });
});

// Remove Active Class from Family Nav List
let removeAllActiveClass = () => {
  for (let nav of familyNavlist[0].children) nav.classList.remove("active");
};

// Image Slider Button Control

let imageCount = 0;
let images = ["banner.png", "slide2.jpg", "slide3.jpg"];
let nextBtn = document.getElementsByClassName("nextSelectBtn");
let prevBtn = document.getElementsByClassName("prevSelectBtn");

let backImage = document.getElementsByClassName("back-image")[0];

// Slider Next button event
nextBtn[0].addEventListener("click", e => {
  imageCount++;
  if (imageCount >= images.length) imageCount = 0;
  slideImage();
});

// Slider Previous Button Event

prevBtn[0].addEventListener("click", e => {
  imageCount--;
  if (imageCount < 0) imageCount = images.length - 1;
  slideImage();
});

// Slider Image Show
let slideImage = () => {
  backImage.style.background = `url('img/${images[imageCount]}')`;
  backImage.style.width = "100%";
  backImage.style.height = "750px";
  backImage.style.backgroundRepeat = "no-repeat";
  backImage.style.backgroundSize = "cover";
};
