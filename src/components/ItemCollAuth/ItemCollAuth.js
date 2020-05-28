import React from 'react';
import styles from './ItemCollAuth.module.scss';
import cx from 'classnames';
import Collapse from '../../providers/Collapse';
import Authorisation from '../../providers/Authorisation';

const ItemCollAuth = () => {
  const classList = isCollapsed => cx("columns", {
    [styles.isCollapsed]: isCollapsed
  }, styles.list
  );

  return (
    <Collapse render={({ isCollapsed, toggle }) => (
      <Authorisation render={({ isAuth, toggleAuth }) => (
        <div>
          <button className="button is-link is-rounded" onClick={toggle}>{isCollapsed ? 'Collapse' : 'Hello'}</button>
          <button className="button is-success is-rounded" onClick={toggleAuth}>{isAuth ? 'Log out' : 'Log in'}</button>

          <p>State isAuth is: {isAuth.toString()}</p>
          <p>State isCollapsed is: {isCollapsed.toString()}</p>

          {
            isAuth ? (
              <div className={classList(isCollapsed)}>
                <div className="column">
                  <div className='notification is-primary'>Tips #1</div>
                </div>
                <div className="column">
                  <div className='notification is-primary'>Tips #2</div>
                </div>
                <div className="column">
                  <div className='notification is-primary'>Tips #3</div>
                </div>
                <div className="column">
                  <div className='notification is-primary'>Tips #4</div>
                </div>
              </div>
            ) : (
                <p className="subtitle is-3">You have to log in to see content</p>
              )
          }
        </div>
      )} />
    )} />
    
  )
}

export default ItemCollAuth;
