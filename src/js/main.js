"use strict";

// service worker registration - remove if you're not going to use it

// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', function() {
//         navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
//             // Registration was successful
//             console.log('ServiceWorker registration successful with scope: ', registration.scope);
//         }, function(err) {
//             // registration failed :(
//             console.log('ServiceWorker registration failed: ', err);
//         });
//     });
// }

// place your code below

const kuba = 'kuba';
const age = '25';

let isHappy = false;
isHappy = 'true';


console.log(` Nazywam się ${kuba} i mam ${age} lat`);


const box = document.querySelector('.box-test');
box.innerHTML = "zabawa";
console.log(box.innerHTML)

const paragraphs = document.querySelectorAll('p');

var menuSwitcher = document.querySelector('.navigation__switcher--js');
menuSwitcher.addEventListener('click', (e) => {
    const navigationList = document.querySelector('.navigation__list');
    navigationList.classList.toggle('navigation__list--visible');
});



const focusButton = document.querySelector('.focus--js');

focusButton.value = localStorage.getItem('input');

focusButton.addEventListener('keyup', (e) => {
    localStorage.setItem('input', e.target.value);
});