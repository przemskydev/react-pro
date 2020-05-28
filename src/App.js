import React from 'react';
import styles from './App.module.scss'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Components from './views/Components';
import Docs from './views/Docs';
import Elements from './views/Elements';
import Patterns from './views/Patterns';
import Tips from './views/Tips';


function App() {
  return (
    <Router>
      <Header />
      <div className={styles.app}>
        <Route exact path='/' component={Docs} />
        <Route exact path='/tips' component={Tips} />
        <Route exact path='/patterns' component={Patterns} />
        <Route exact path='/elements' component={Elements} />
        <Route exact path='/components' component={Components} />
      </div>
    </Router>
  );
}

export default App;
