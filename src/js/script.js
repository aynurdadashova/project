"use strict";
const addCards = document.querySelectorAll(".add-card");
const shoppingCardNum = document.querySelector(".shopping-card-num");
let count = 0;

addCards.forEach(function (addCard) {
  addCard.addEventListener("click", function (e) {
    e.preventDefault();

    count++;

    shoppingCardNum.textContent = count;
  });
});

window.addEventListener("scroll", function () {
  const scroll = document.querySelector(".scroll");

  if (!scroll) return; // scroll class'ına sahip öğe mevcut değilse fonksiyondan çık

  if (window.scrollY > 200) {
    scroll.classList.remove("hidden"); // Scroll 10px'den fazla olursa hidden class'ını kaldır
  } else {
    scroll.classList.add("hidden");
  }
});
