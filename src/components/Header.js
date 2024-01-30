import React from 'react';
import './Header.css';

function Header() {
  return (
    <>
    <div class='navbar'>
   <nav class="top-nav">
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
      <li><a class="nav-link" href="/About">About Us</a></li>
      <li><a class="nav-link" href="/Filmography">Services</a></li>
      <li><a class="nav-link" href="/Gallery">Portfolio</a></li> 
      <li><a class="nav-link" href="/ContactUs">Testimonials</a></li>
      <li><a class="nav-link" href="/ContactUs">Blogs</a></li>
      <li><a class="nav-link" href="/ContactUs">Contact Us</a></li>
    </ul>
  </nav>
  </div>
    </>
  );
}

export default Header