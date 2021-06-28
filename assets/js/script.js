const navbar = document.querySelector("nav");
const imgSlider = document.querySelectorAll("#home .carousel-item img");
document.getElementById("home").style.marginTop = navbar.clientHeight + "px";
function realtimeHeightSlider(w) {
  imgSlider.forEach((img) => {
    const height = `calc(100vh - ${navbar.clientHeight}px)`;
    img.style.height = w > 767 ? height : "60vmin";
  });
}

function getWidthWindow(...func) {
  //   return window.innerWidth;

  if (func.length > 0) {
    func.forEach((m) => {
      window[m](window.innerWidth);
    });
  }
}

window.onresize = () => getWidthWindow("realtimeHeightSlider");
window.onload = () => getWidthWindow("realtimeHeightSlider");

const linkScroll = document.querySelectorAll("a.link-scroll");
linkScroll.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = e.target.getAttribute("href");
    const section = document.querySelector(href);
    if (section) {
      const scroll =
        href == "#home" ? section.offsetTop : section.offsetTop + 40;
      window.scrollTo(0, scroll);
    }
  });
});

// lightbox
function elLightBox(src, idLightbox) {
  return `<a href="${src}"  data-fancybox="${idLightbox}" class="parent-lightbox"></a>`;
}
$("img.image-lightbox").each((i, el) => {
  let href = $(el).attr("src");
  let lightBoxId = $(el).data("lb-id");

  $(el)
    .parent()
    .prepend($(elLightBox(href, lightBoxId)).html(el));
});
