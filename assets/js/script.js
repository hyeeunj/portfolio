document.addEventListener("DOMContentLoaded", () => {

  AOS.init({
    duration: 1200,
    easing: 'ease-in-out-sine',
    once: true,
  });

  //progress

  const $prog = document.querySelector(".progress");
  const $bar = document.querySelector(".bar");

  function updateProgress() {
    let documentHeight = document.documentElement.scrollHeight;
    let windowHeight = window.innerHeight;

    let scrollPosition = window.scrollY;

    let scrolledPercentage = (scrollPosition / (documentHeight - windowHeight)) * 100;


    $bar.style.width = scrolledPercentage + "%";
  }
  updateProgress();
  window.addEventListener("scroll", () => {
    updateProgress();
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


  //gsap
  gsap.registerPlugin(ScrollTrigger);

  gsap.defaults({ ease: "power2.out", duration: 1 });

  // 타임라인 정의
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".project",
      start: "-100",
      end: "+=5000", // 전체 길이를 늘려야 충분한 공간 제공
      pin: true,
      scrub: true,
      anticipatePin: 1,
      // markers: true,
    },
  });

  // 초기 상태를 scale: 1로 전환
  tl.to(".item1", { scale: 1 })
    .from(".item2", { yPercent: 300, scale: 2 }, "<0.5")
    .to(".item1", { scale: 0.6, duration: 2 }, "<0.2")
    .from(".item3", { yPercent: 300, scale: 2 }, "<0.5")
    .to(".item2", { scale: 0.6, duration: 2 }, "<0.2")
    .from(".item4", { yPercent: 300, scale: 2 }, "<0.5") // item4 애니메이션 추가
    .to(".item3", { scale: 0.6, duration: 2 }, "<0.2") // item4 올라오면서 item3 축소
    .from(".item5", { yPercent: 300, scale: 2 }, "<0.5") // item5 애니메이션 추가
    .to(".item4", { scale: 0.6, duration: 2 }, "<0.2") // item5 올라오면서 item4 축소
    .from(".item6", { yPercent: 800, scale: 2 }, "<0.5") // item5 애니메이션 추가
    .to(".item5", { scale: 0.6, duration: 2 }, "<0.2") // item5 올라오면서 item4 축소
    .from(".item7", { yPercent: 800, scale: 2 }, "<0.5") // item5 애니메이션 추가
    .to(".item6", { scale: 0.6, duration: 2 }, "<0.2"); // item5 올라오면서 item4 축소

  // 타임라인 전체 속도 조정
  tl.timeScale(0.5); // 전체 속도를 절반으로 느리게

  const target = document.querySelector(".resume");

  if (target) {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            target.classList.add("bgWhite");
          } else {
            target.classList.remove("bgWhite");
          }
        });
      },
      {
        threshold: 0.1, // 요소가 10% 이상 화면에 보이면 트리거
      }
    );

    observer.observe(target);
  }



});