const gallery = document.querySelectorAll("#galeri .card");
const titleSection = document.querySelectorAll(".title-section");
const misiItems = document.querySelectorAll("#misi .accordion-item");
const galleryNavItem = document.querySelectorAll("#galeri .nav-item");
const kontak = document.querySelectorAll("#kontak .list-group-item");

gallery.forEach((g, i) => {
  g.dataset.aos = "flip-left";
  g.dataset.aosDelay = i * 100;
});

titleSection.forEach((ts) => {
  ts.dataset.aos = "fade-left";
});

// misi content
misiItems.forEach((m) => {
  m.dataset.aos = "fade-right";
});

galleryNavItem.forEach((gn, i) => {
  gn.dataset.aos = "fade-up";
  gn.dataset.aosDelay = i * 100;
});

kontak.forEach((m) => {
  m.dataset.aos = "fade-right";
});

// AOS.init({
//   once: true,
// });
