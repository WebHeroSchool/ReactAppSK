import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';
// import IconButton from '@material-ui/core/IconButton';
// import DeleteIcon from '@material-ui/icons/Delete';
import PropTypes from 'prop-types';

const ItemList = ({ items, onClickDone, onClickDelete }) => (<ul className={styles.list}>
    {items.map(item => <li key={item.id}>
      <Item 
        value = {item.value} 
        isDone = {item.isDone}
        id = {item.id}
        onClickDone = {onClickDone}
        onClickDelete = {onClickDelete}
      />
      </li>)}
</ul>);

ItemList.propTypes = {
  items: PropTypes.array.isRequired
};

export default ItemList;