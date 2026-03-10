function copyAccount() {
  const account = "123-456-78900";
  navigator.clipboard.writeText(account);
  alert("계좌번호가 복사되었습니다.");
}

function openMap() {
  window.open(
    "https://map.kakao.com/link/to/라비니움,37.5361,127.1253",
    "_blank"
  );
}

let bgm;
let musicPlaying = true;

function toggleMusic() {
  const btn = document.getElementById("musicBtn");

  if (musicPlaying) {
    bgm.pause();
    btn.innerText = "🔇";
    musicPlaying = false;
  } else {
    bgm.play();
    btn.innerText = "🔊";
    musicPlaying = true;
  }
}

document.addEventListener("DOMContentLoaded", function () {

  /* BGM 초기화 */

  bgm = document.getElementById("bgm");

  bgm.muted = true;
  bgm.play().then(() => {
    bgm.muted = false;
  }).catch(() => {
    musicPlaying = false;
    document.getElementById("musicBtn").innerText = "🔇";
  });


  /* Swiper 초기화 */

  const swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 12,
    centeredSlides: true,

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

});