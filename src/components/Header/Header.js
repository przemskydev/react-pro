import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () => (
  <div className="hero is-primary is-bold">

    <div className="hero-body">
      <div className="container has-text-centered">
        <h1 className="title">
          React Pro
        </h1>
        <h2 className="subtitle">
          Advanced practice training
        </h2>
      </div>
    </div>

    <div className="hero-foot">
      <nav className="tabs">
        <div className="container">
          <ul>
            <li>
              <NavLink to='/'>Docs</NavLink>
            </li>
            <li>
              <NavLink to='/tips'>Tips</NavLink>
            </li>
            <li>
              <NavLink to='/patterns'>Patterns</NavLink>
            </li>
            <li>
              <NavLink to='/elements'>Elements</NavLink>
            </li>
            <li>
              <NavLink to='/components'>Components</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
)

export default Header;