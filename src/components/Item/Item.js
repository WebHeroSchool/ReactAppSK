import React from 'react';
import styles from './Item.module.css';
import classnames from 'classnames';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import PropTypes from 'prop-types';

class Item extends React.Component {
  render() {
    const { value, isDone, onClickDone, id, onClickDelete } = this.props;
    return(
      <span>
<Checkbox
        checked={isDone}
        onClick = {() => onClickDone(id)}
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
          <span className = {
            classnames({
                [styles.item]: true,
                [styles.done]: isDone,
            }) 
        }>{value}</span>
        <IconButton 
          aria-label="delete" 
          onClick = {() => onClickDelete(id)} 
          className={styles.delete}>
            <DeleteIcon  size="small"/>
        </IconButton>
      </span>);
  }
}


//const Item = () => (

Item.defaultProps = {
  value: "No tasks"
};

Item.propTypes = {
  value: PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number
])};

export default Item;

