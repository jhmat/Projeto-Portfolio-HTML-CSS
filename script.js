const sections = document.querySelectorAll("a[href^='#']");

function clickSection(event) {
  event.preventDefault();
  let attribute = event.target.getAttribute("href");
  let section = document.querySelector(attribute);
  section.scrollIntoView({ behavior: "smooth", block: "start" });
}

sections.forEach((item) => {
  item.addEventListener("click", clickSection);
});
