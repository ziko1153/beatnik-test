// Family Nav List
const familyNavlist = document.querySelectorAll(".family-nav ul");

familyNavlist.forEach(nav => {
  nav.addEventListener("click", e => {
    const subEl = e.target.tagName === "A" ? e.target.parentNode : e.target;
    removeAllActiveClass();
    subEl.classList.toggle("active");
  });
});

let removeAllActiveClass = () => {
  for (let nav of familyNavlist[0].children) nav.classList.remove("active");
};
