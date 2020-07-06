import React from 'react';
import styles from './ItemColumn.module.scss';
import cx from 'classnames';
import withCollapsed from '../../hoc/withCollapsed';
import withAuth from '../../hoc/withAuth';
import { compose } from 'recompose';

const ItemColumn = ({ isAuth, toggleAuth, toggle, isCollapsed, text }) => {
  const classList = cx("columns", {
    [styles.isCollapsed]: isCollapsed
  }, styles.list
  );

  return (
    <div >
      <button className="button is-link is-rounded" onClick={toggle}>{isCollapsed ? 'Collapse' : text}</button>
      <button className="button is-success is-rounded" onClick={toggleAuth}>{isAuth ? 'Log out' : 'Log in'}</button>

      <p>State isAuth is: {isAuth.toString()}</p>
      <p>State isCollapsed is: {isCollapsed.toString()}</p>

      {
        isAuth ? (
          <div className={classList}>
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
  )
}

export default compose(
  withAuth,
  withCollapsed
)(ItemColumn);
