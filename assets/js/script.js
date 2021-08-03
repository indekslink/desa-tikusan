const navbar = document.querySelector("nav");
document.getElementById("home").style.marginTop = navbar.clientHeight + "px";
function realtimeHeightSlider(w) {
  const imgSlider = document.querySelectorAll("#home .carousel-item img");
  imgSlider.forEach((img) => {
    const height = `calc(100vh - ${navbar.clientHeight}px)`;
    img.style.height = w > 767 ? height : "80vmin";
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
function closeLoader() {
  const loader = document.querySelector(".loading");
  loader.classList.add("close");
  document.body.classList.remove("overflow-hidden");
}
function showLoader() {
  const loader = document.querySelector(".loading");
  loader.classList.remove("close");
}
window.onresize = () => getWidthWindow("realtimeHeightSlider");
window.onload = () => {
  closeLoader();
  getWidthWindow("realtimeHeightSlider");
};

const linkScroll = document.querySelectorAll("a.link-scroll");
linkScroll.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = e.target.getAttribute("href");
    const section = document.querySelector(href);
    if (section) {
      const scroll =
        href == "#home" ? section.offsetTop - 100 : section.offsetTop - 20;
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

window.onscroll = () => {
  document
    .querySelector(".to-top")
    .classList.toggle("show", window.scrollY > 100);
  myScrollspy(window.scrollY);
};

function myScrollspy(scroller) {
  const menuScrollspy = document.querySelectorAll("a.my-scrollspy");
  menuScrollspy.forEach((m) => {
    let section = document.querySelector(`section${m.getAttribute("href")}`);
    if (section) {
      let offTop = section.offsetTop;
      m.classList.remove("active");

      let total = offTop + section.clientHeight;
      if (scroller > offTop - 100 && scroller < total - 50) {
        m.classList.add("active");
        if (m.classList.contains("dropdown-item")) {
          let menuDropdown =
            m.parentElement.parentElement.previousElementSibling;
          menuDropdown.classList.add("active");
        } else {
          document
            .querySelectorAll(".nav-link.dropdown-toggle")
            .forEach((menuDropdown) => {
              menuDropdown.classList.remove("active");
            });
        }
      }
    }
  });
}
