"use strict";
import '../scss/main.scss';
import '../index.html';
import './common';
import WOW from 'wow.js/dist/wow.js';

const wow = new WOW(
  {
    boxClass:     'wow',
    offset:       100,
    mobile:       false,
  }
)
wow.init();

// console.log('Hello world');
