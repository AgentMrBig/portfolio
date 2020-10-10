import React from 'react';


import './topMenu.styles.scss';

export default function TopMenu() {
  return (
    <nav className="black" id="topNav">
      
      <ul>
 
        <h1 className="brand">
          <a href="#">Call To Action</a>
        </h1>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About Me</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Contact Me</a>
        </li>
      </ul>
    </nav>
  );
}