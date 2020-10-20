'use strict';

var subscriptionLinks = document.querySelectorAll('.subscription__time a');
var subscriptionBlocks = document.querySelectorAll('.subscription__about-tab');

var hideLinksActiveClass = function () {
  Array.prototype.forEach.call(subscriptionLinks, function (link) {
    link.classList.remove('active');
  });
};

var hideBlocks = function () {
  Array.prototype.forEach.call(subscriptionBlocks, function (block) {
    block.classList.remove('active');
  });
};

if (subscriptionLinks.length) {
  Array.prototype.forEach.call(subscriptionLinks, function (link, index) {
    link.addEventListener('click', function (evt) {
      evt.preventDefault();
      hideLinksActiveClass();
      hideBlocks();
      link.classList.add('active');
      subscriptionBlocks[index].classList.add('active');
    });
  });
}
