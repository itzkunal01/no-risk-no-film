// ========== NAVBAR JS CODE ==========
function showNav() {
  var navBar = document.getElementById("navBar");
  var body = document.body;
  var navToggleIcon = document.getElementById("navToggleIcon");

  navBar.classList.toggle("show_nav");
  body.classList.toggle("nav_mobile_scroll");
  navToggleIcon.src = navBar.classList.contains("show_nav")
    ? "./assets/images/common/nav-cross.svg"
    : "./assets/images/common/nav-toggle.svg";
}
// ========== BACK TO TOP JS CODE ==========
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#scroll").fadeIn();
    } else {
      $("#scroll").fadeOut();
    }
  });
  $("#scroll").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      40
    );
    return false;
  });
});

const url = new URL(window.location);
const sectionID = url.searchParams.get("section");
const goTOSection = (id) => {
  const section = document.querySelector(`#${id}`);

  console.log(section);
  section.scrollIntoView({
    behavior: "smooth",
  });
};

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    if (sectionID) {
      goTOSection(sectionID);
    }
  }, 1000);
});
