import React from 'react';
import styles from './Footer.module.css';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const Footer = ({ count, clickFilterBtn, onClickDeleteDone }) => (
  <div><div className = {styles.footer}>Cases left: {count} </div>
    <div className={styles.button}>
      <Button variant="outlined" className = {styles.all} onClick={() => clickFilterBtn("All")}>All</Button>
      <Button variant="outlined" classNmae = {styles.active} color="primary" onClick={() => clickFilterBtn("Active")}>
        Active
      </Button>{console.log(count)}
      <Button variant="outlined" className = {styles.completed} color="secondary" onClick={() => clickFilterBtn("Completed")}>
        Completed
      </Button>
      <Button variant="outlined" className = {styles.clear} onClick={onClickDeleteDone}>
        Clear Completed
      </Button>
    </div>
  </div>
);

Footer.defaultProps = {
  count: 0
};

Footer.propTypes = {
  count: PropTypes.number.isRequired
};

export default Footer;