import React from 'react';
import './Header1.css';

function Header1() {
  return (
    <>
    <div class='navbar1'>
   <nav class="top-nav1">
    <a class="active" href="/">
    <div class="logo">
    </div>
    </a>
    <input id="menu-toggle" type="checkbox" />
  <label class='menu-button-container' for="menu-toggle">
    <div class='menu-button'></div>
  </label>
    <ul class="menu">
      <li><a class="nav-link" href="/">Home</a></li> 
      <li><a class="nav-link" href="/aboutUs">About Us</a></li>
      <li><a class="nav-link" href="/services">Services</a></li>
      <li><a class="nav-link" href="/portfolio">Portfolio</a></li> 
      <li><a class="nav-link" href="/testimonials">Testimonials</a></li>
      <li><a class="nav-link" href="/blog">Blogs</a></li>
      <li><a class="nav-link" href="/contactUs">Contact Us</a></li>
    </ul>
  </nav>
  </div>
    </>
  );
}

export default Header1