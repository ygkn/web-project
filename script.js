const sections = [...document.querySelectorAll("section")];
const { body } = document;

const observer = new IntersectionObserver(entries =>
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    body.dataset.view = sections.indexOf(entry.target);
  })
);

sections.forEach(element => observer.observe(element));
