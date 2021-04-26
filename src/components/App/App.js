import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styles from './App.module.css';

import Card from '@material-ui/core/Card';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Todo from '../Todo/Todo';
import About from '../About/About';
import Contacts from '../Contacts/Contacts';

const App = () => (
  <Router>
    <div className = {styles.base}>
      <Card className = {styles.sidebar}>
        <MenuList className = {styles.list}>
          <Link to='/' className = {styles.link}><MenuItem className = {styles.item}>About me</MenuItem></Link>
          <Link to='/todo' className = {styles.link}><MenuItem className = {styles.item}>Tasks</MenuItem></Link>
          <Link to='/contacts' className = {styles.link}><MenuItem className = {styles.item}>Contacts</MenuItem></Link>
        </MenuList>
      </Card>

      <Card className = {styles.content}>
        <Route path='/' exact component = {About} />
        <Route path='/todo' component={Todo} />
        <Route path='/contacts' component={Contacts} />
      </Card>
    </div>
  </Router>);

export default App;
