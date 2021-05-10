"use strict";

const main_info = document.querySelector('.main-info');
// const ellipse = [];

for(let i = 0; i < 10; i++) {
  let div = document.createElement("div");
  div.classList.add('ellipse');

  main_info.append(div);
}
