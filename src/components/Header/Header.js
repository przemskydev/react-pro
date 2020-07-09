import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div data-testid='sample-test' className="hero is-primary is-bold">

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
              <NavLink to='/'>HOC #1</NavLink>
            </li>
            <li>
              <NavLink to='/hoc'>HOC #2</NavLink>
            </li>
            <li>
              <NavLink to='/renderprops1'>Render Props #1</NavLink>
            </li>
            <li>
              <NavLink to='/renderprops2'>Render Props #2</NavLink>
            </li>
            <li>
              <NavLink to='/renderprops3'>RP & DownShift</NavLink>
            </li>
            <li>
              <NavLink to='/usestate'>useState</NavLink>
            </li>
            <li>
              <NavLink to='/usereducer'>useReducer</NavLink>
            </li>
            <li>
              <NavLink to='/useref'>useRef</NavLink>
            </li>
            <li>
              <NavLink to='/context'>Context</NavLink>
            </li>
            <li>
              <NavLink to='/compound'>Compound Component #1</NavLink>
            </li>
            <li>
              <NavLink to='/testing'>Testing #1</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
)

export default Header;