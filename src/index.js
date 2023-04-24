import _ from 'lodash';
import './style.css';
import loadMain from './main-page';
import loadMenu from './menu';
import loadHome from './home';
import loadContact from './contact';

function component() {
  function mouseOverHome(){
    const x = document.getElementById('homeBtn')
    x.style.cssText = "color: rgb(124, 118, 118)"
  }
  function mouseOutHome(){
    const x = document.getElementById('homeBtn')
    x.style.cssText = "color: white"
  }
  function mouseOverMenu(){
    const x = document.getElementById('menuBtn')
    x.style.cssText = "color: rgb(124, 118, 118)"
  }
  function mouseOutMenu(){
    const x = document.getElementById('menuBtn')
    x.style.cssText = "color: white"
  }
  function mouseOverContact(){
    const x = document.getElementById('contactBtn')
    x.style.cssText = "color: rgb(124, 118, 118)"
  }
  function mouseOutContact(){
    const x = document.getElementById('contactBtn')
    x.style.cssText = "color: white"
  }

  const Container = document.getElementById('content')

  const header = document.createElement('div');
  header.classList.add('header');
  Container.appendChild(header);

  const lHeader = document.createElement('div');
  lHeader.classList.add('l-header');
  header.appendChild(lHeader);

  const preHeader4 = document.createElement('div');
  preHeader4.classList.add('title-header');
  lHeader.appendChild(preHeader4);

  const tHeader = document.createElement('p');
  tHeader.textContent = 'Le Coucou';
  tHeader.id = 'title';
  preHeader4.appendChild(tHeader);

  const preHeader5 = document.createElement('div');
  preHeader5.classList.add('empty-header');
  lHeader.appendChild(preHeader5);





  const rHeader = document.createElement('div');
  rHeader.classList.add('r-header');
  header.appendChild(rHeader);

  const preHeader1 = document.createElement('div');
  preHeader1.classList.add('pre-header');
  preHeader1.id = 'homeBtn'
  preHeader1.addEventListener('click',loadHome);
  preHeader1.addEventListener('mouseover',mouseOverHome);
  preHeader1.addEventListener('mouseout',mouseOutHome);
  rHeader.appendChild(preHeader1);

  const homeBox = document.createElement('p');
  homeBox.textContent = 'Home';
  preHeader1.appendChild(homeBox);

  const preHeader2 = document.createElement('div');
  preHeader2.classList.add('pre-header');
  preHeader2.id = 'menuBtn'
  preHeader2.addEventListener('click',loadMenu);
  preHeader2.addEventListener('mouseover',mouseOverMenu);
  preHeader2.addEventListener('mouseout',mouseOutMenu);
  rHeader.appendChild(preHeader2);

  const menuBox = document.createElement('p');
  menuBox.textContent = 'Menu';
  preHeader2.appendChild(menuBox);

  const preHeader3 = document.createElement('div');
  preHeader3.classList.add('pre-header');
  preHeader3.id = 'contactBtn'
  preHeader3.addEventListener('click',loadContact);
  preHeader3.addEventListener('mouseover',mouseOverContact);
  preHeader3.addEventListener('mouseout',mouseOutContact);
  rHeader.appendChild(preHeader3);

  const contactBox = document.createElement('p');
  contactBox.textContent = 'Contact';
  preHeader3.appendChild(contactBox);

  loadMain()
  }
  
component()