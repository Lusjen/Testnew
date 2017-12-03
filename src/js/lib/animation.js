// import $ from 'jquery';
import {TimelineMax} from 'gsap';

var tl = new TimelineMax;

tl
  .fromTo('.header', 0.5, {opacity: 0,y:-100}, {opacity: 1,y: 0})	
  .fromTo('.header-top__left', 1, {opacity: 0,y: -100}, {y: 0,opacity: 1})
  .staggerFromTo('.nav li', 0.5, {opacity: 0,y: 100,x: -100}, {y: 0,opacity: 1,x: 0}, 0.1)
  .fromTo('.header-top__right', 0.5, {opacity: 0,y: 100}, {opacity: 1,y: 1});
