/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

var buttonSorteren = document.querySelector('#sorteren');
var buttonFilteren = document.querySelector('#filteren');
var formSorteren = document.querySelector('#formSorteren');
var formFilteren = document.querySelector('#formFilteren');

function openSorteren() {
    formSorteren.classList.remove('hidden');
    formFilteren.classList.add('hidden');
}

function openFilteren() {
    formSorteren.classList.add('hidden');
    formFilteren.classList.remove('hidden');
}

function paars() {
    buttonFilteren.style.backgroundColor = "purple";
    buttonFilteren.style.color = "white";
    buttonSorteren.style.background = "#FAFAFA";
    buttonSorteren.style.color = "rgb(33, 49, 49)";
}

function grijs() {
    buttonSorteren.style.backgroundColor = "purple";
    buttonSorteren.style.color = "white";
    buttonFilteren.style.background = "#FAFAFA";
    buttonFilteren.style.color = "rgb(33, 49, 49)";
}

buttonSorteren.addEventListener("click", openSorteren);
buttonSorteren.addEventListener("click", paars);
buttonFilteren.addEventListener('click', openFilteren);
buttonFilteren.addEventListener('click', grijs);

var button = document.getElementById('hamburger');
var nav = document.querySelector('nav');

function klapUit() {
    nav.classList.toggle('klapuit');
}

button.addEventListener('click', klapUit);

var bookmark = document.querySelector(".voor");

function vullen() {
    bookmark.style.fontWeight = "900";
}

bookmark.addEventListener("click", vullen);

var radio = document.querySelectorAll(".radiomark");

function kleuren() {
    radio.style.backgroundColor = " rgb(233, 181, 38)";
}

radio.addEventListener('click', kleuren);
