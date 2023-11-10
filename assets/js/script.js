AOS.init({
  once: true,
});

//fullpage
new fullpage("#fullpage", {
  navigation: true,
  // showActiveTooltip: true,
  // slidesNavigation: true,

  navigationTooltips: ["home", "about", "skill", "project", "contact"],
  anchors: ["home", "about", "skill", "project", "contact"],
  menu: "#navList",
  responsiveWidth: 767,
  scrollOverflow: false,

  afterLoad: function () {
    document
      .querySelectorAll(".fp-table.active .aos-init")
      .forEach(el => {
        el.classList.add("aos-animate");
      });
  },
  onLeave: function () {
    document
      .querySelectorAll(".fp-table.active .aos-init")
      .forEach(el => {
        el.classList.remove("aos-animate");
      });
  },
});

// header btn 클릭시 포인트
const $headerBtn = document.querySelectorAll(".header-btn");

$headerBtn.forEach((item, index) => {
  item.addEventListener("click", () => {
    for (let i = 0; i < $headerBtn.length; i++) {
      $headerBtn[i].classList.remove("on");
    }
    if (item.classList.contains("on")) {
      item.classList.remove("on");
    } else {
      item.classList.add("on");
    }
  });
});