import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navBar">
    <div className="navItems">
      <h2 className='navTitle'>Supreme Bookstore</h2>
      <ul className="navLinks">
        <li><Link to="/">Books</Link></li>
        <li><Link to="categories">Categories</Link></li>
      </ul>
    </div>
    <img id='image-nav' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7HrjlxizejA_sfkfPhIaAdv5Cxy6A-HGFzA&usqp=CAU" alt="profile" />
  </nav>
);

export default Navbar;