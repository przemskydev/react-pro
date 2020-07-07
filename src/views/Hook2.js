import React, { useReducer } from 'react';
import styles from './Hook1.module.scss';
import cx from 'classnames';

const reducer = (state, action) => {
  switch (action.type) {
    case 'field':
      return {
        ...state,
        [action.field]: action.value,
      }
      break;
    case 'add-item':
      return {
        ...state,
        itemList: [...state.itemList, action.payload]
      }
      break;
    case 'remove-item':
      return {
        ...state,
        itemList: [...state.itemList.filter(item => item.id !== action.payload.id)]
      }
      break;
    default:
      break;
  }

  return state;
}

const initialState = {
  inputContent: '',
  search: '',
  itemList: [
    {
      id: 1,
      content: "Hey! Please add yout first note."
    }
  ]
}

const HookOne = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const { inputContent, search, itemList } = state;

  const handleAdd = () => {
    const newElement = {
      id: itemList.length + 1,
      content: inputContent
    }

    dispatch({ type: 'add-item', payload: newElement })
  }

  const handleRemove = (id) => {
    dispatch({ type: 'remove-item', payload: { id: id } })
  }

  return (
    <div className={styles.wrapper}>

      <input
        placeholder='Search notes by context'
        autoComplete="off"
        className="input"
        type='text'
        value={search}
        onChange={e =>
          dispatch({
            type: 'field',
            field: 'search',
            value: e.target.value
          })}
      />

      <hr />
      <h1>Add Notes</h1>
      <input
        autoComplete="off"
        className="input"
        type='text'
        value={inputContent}
        onChange={e =>
          dispatch({
            type: 'field',
            field: 'inputContent',
            value: e.target.value
          })}
      />

      <button
        className={cx('button is-primary', styles.button)}
        onClick={() => handleAdd()}>ADD</button>

      {
        itemList
          .filter(({ content }) => content.includes(search))
          .map(({ id, content }) => (
            <div key={id} className={cx("notification is-info is-light", styles.item)}>
              <button className="delete" onClick={() => handleRemove(id)}></button>
              {
                content
              }
            </div>
          ))
      }

    </div>
  )
}

export default HookOne;

