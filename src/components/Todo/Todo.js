import React, {useState, useEffect} from 'react';
import CardContent from '@material-ui/core/CardContent';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './Todo.module.css';

const Todo = () => {
    const initialState = {
    items: [
      {
        value: 'Do something.',
        isDone: false,
        id: 1
      },
      {
        value: 'Do something.',
        isDone: true,
        id: 2
      },
      {
        value: 'Do something.',
        isDone: true,
        id: 3
      }
    ],
    count: 3
  };

  const [items, setItems] = useState(initialState.items);
  const [visibleItems, setvisibleItems] = useState([]);
  const [filter, setfilter] = useState('All');
  const [count, setCount] = useState(initialState.count);

  useEffect(() => {setvisibleItems(itemsFilter(items, filter))}, [filter, items]);

  const onClickDone = id => {
    const newItemList = items.map(item => {
      const newItem = { ...item };
      if (item.id === id) {
        newItem.isDone = !item.isDone;
      }
      return newItem;
    });
    setItems(newItemList);
  };

  
  const onClickDelete = id => {
    const newItemList = items.filter(item => item.id !== id);
      setItems(newItemList)
      setCount(count - 1)
  };
  
  const onClickAdd = value => {
    setItems (
      [...items,
        {
          value,
          isDone: false,
          id: count + 1
    }]);
      setCount(count + 1)
  }

  function itemsFilter(itemList, value) {
    switch (value) {
      case 'Active': return itemList.filter(item => !item.isDone);
      case 'Completed': return itemList.filter(item => item.isDone);
      case 'All':
      default: return itemList;
    }
  }

  function clickFilterBtn(value) {
    setfilter(value)
  }

  const onClickDeleteDone = () => {
    const newItemList = items.filter(item => !item.isDone);
    setItems(newItemList)
  };
    
  return (
    <CardContent>
      <h1 className = {styles.title}>Important tasks: </h1>
      <InputItem 
        onClickAdd = {onClickAdd} 
        items = {items} 
      /> 
      <ItemList 
        items = {visibleItems} 
        onClickDone={onClickDone} 
        onClickDelete={onClickDelete}
      />
      <Footer 
        count = {visibleItems.length}
        clickFilterBtn = {clickFilterBtn}
        onClickDeleteDone = {onClickDeleteDone}
      />
    </CardContent>
  );
}

export default Todo; 