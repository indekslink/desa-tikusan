const gallery = document.querySelectorAll("#galeri .card");
const titleSection = document.querySelectorAll(".title-section");
const misiItems = document.querySelectorAll("#misi .accordion-item");
const galleryNavItem = document.querySelectorAll("#galeri .nav-item");
const kontak = document.querySelectorAll("#kontak .list-group-item");

const menuNavbar = document.querySelectorAll("nav.navbar ul li.nav-item");
gallery.forEach((g, i) => {
  g.dataset.aos = "fade-up";
});

titleSection.forEach((ts) => {
  ts.dataset.aos = "fade-up";
});

// misi content
misiItems.forEach((m) => {
  m.dataset.aos = "fade-up";
});

galleryNavItem.forEach((gn, i) => {
  gn.dataset.aos = "fade-up";
});

kontak.forEach((m) => {
  m.parentElement.dataset.aos = "fade-right";
});
menuNavbar.forEach((mn, i) => {
  mn.dataset.aos = "fade-up";
  mn.dataset.aosDelay = (i + 1) * 100;
});

AOS.init({
  disable: "tablet",
  once: true,
});
