import React from 'react';
import styles from './App.module.scss'
import cx from 'classnames';
import ItemList from './components/Itemlist/ItemList'

function App() {
  return (
    <div className={styles.app}>
      <ItemList />
    </div>
  );
}

export default App;
