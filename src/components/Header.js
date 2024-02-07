import React from 'react';
import './Header.css';

function Header() {
  return (
    <>
    <div class='navbar3'>
   <nav class="top-nav">
    <a class="active" href="/">
    <div class="logo">
    </div>
    </a>
    <input id="menu-toggle" type="checkbox" />
  <label class='menu-button-container' for="menu-toggle">
    <div class='menu-button'></div>
  </label>
    <ul class="menu1">
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

export default Header