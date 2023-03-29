import {initialLoad} from './home';
import {menuLoad} from './menu';
import {infoLoad} from './info';

initialLoad();

const content = document.querySelector('#content');
const menuTab = document.querySelector('#menu-tab');
menuTab.addEventListener('click', () => {
    content.innerHTML = '';
    menuLoad();
})

const homeTab = document.querySelector('#home-tab');
homeTab.addEventListener('click', () => {
    content.innerHTML = '';
    initialLoad();
})

const infoTab = document.querySelector('#info-tab');
infoTab.addEventListener('click', () => {
    content.innerHTML = '';
    infoLoad();
})