import { HeaderComponent } from './app.js';

const root = document.querySelector("#root");
const header = HeaderComponent(); // funksiyani chaqiramiz

// DOMga qo‘shish
root.appendChild(header);
