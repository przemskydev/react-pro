import React from 'react';
import styles from './App.module.scss'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Hoc from './views/Hoc';
import Hoc2 from './views/Hoc2';
import RenderProps1 from './views/RenderProps1';
import RenderProps2 from './views/RenderProps2';
import RenderProps3 from './views/RenderProps3';
import Hook1 from './views/Hook1';
import Hook2 from './views/Hook2';
import HookThree from './views/Hook3';
import ContextComponent from './views/ContextComponent';
import Compound from './views/Compound';
import Testing from './views/Testing';



function App() {
  return (
    <Router>
      <Header />
      <div className={styles.app}>
        <Route exact path='/' component={Hoc} />
        <Route exact path='/hoc' component={Hoc2} />
        <Route exact path='/renderprops1' component={RenderProps1} />
        <Route exact path='/renderprops2' component={RenderProps2} />
        <Route exact path='/renderprops3' component={RenderProps3} />
        <Route exact path='/usestate' component={Hook1} />
        <Route exact path='/usereducer' component={Hook2} />
        <Route exact path='/useref' component={HookThree} />
        <Route exact path='/context' component={ContextComponent} />
        <Route exact path='/compound' component={Compound} />
        <Route exact path='/testing' component={Testing} />
      </div>
    </Router>
  );
}

export default App;
