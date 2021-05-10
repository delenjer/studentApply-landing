"use strict";

const ellipseContainer = document.querySelectorAll('.ellipse-container');
const mainWidth = 1300;

ellipseContainer.forEach(containerElem => {
  for(let i = 0; i < 30; i++) {
    let ellipseElem = document.createElement("div");
    ellipseElem.classList.add('ellipse');

    (i % 2 === 0) ? ellipseElem.classList.add('ellipse__max') : ellipseElem.classList.add('ellipse__min');

    if(i % 3 === 0) {
      ellipseElem.classList.add('ellipse__max--bg-yellow');
    } else if(i % 4 === 0) {
      ellipseElem.classList.add('ellipse__min--bg-yellow');
    }

    containerElem.append(ellipseElem);
  }

  const ellipse = document.querySelectorAll('.ellipse');
  const elemWidth = mainWidth;
  let elemHeight = containerElem.offsetHeight;

  ellipse.forEach(item => {
    let randomTop = getRandomHeight(0, elemHeight);
    let randomLeft = getRandomWidth(0, elemWidth);

    item.style.top = randomTop + 'px';
    item.style.left = randomLeft + 'px';
  });
});

function getRandomHeight(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandomWidth(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
