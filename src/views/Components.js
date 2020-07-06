import React from 'react'
import Downshift from 'downshift'
import cx from 'classnames';


const items = [
  { value: 'apple' },
  { value: 'pear' },
  { value: 'orange' },
  { value: 'grape' },
  { value: 'banana' },
]

const Components = () => (
  <Downshift>
    {({
      isOpen,
      inputValue,
      getInputProps,
      getMenuProps,
      getItemProps,
      selectedItem
    }) => (
        <div>
          <h1 className="title is-3 is-spaced">Components #renderprops #downshift 🏎</h1>

          <div className={cx('dropdown', {
            'is-active': isOpen
          })}>
            <input
              className="input"
              type="text"
              placeholder="Text input"
              {...getInputProps()}
            />
            <div className="dropdown-menu">
              <div {...getMenuProps()} className="dropdown-content">
                {
                  items
                    .filter(item => item.value.includes(inputValue))
                    .map(({ value }, index) => (
                      <button
                        {...getItemProps({
                          key: value,
                          index,
                          item: value
                        })} className={cx(
                          'button', 'is-white', 'dropdown-item'
                        )}>{value}</button>
                    ))
                }
              </div>
            </div>
          </div>
        </div>
      )}
  </Downshift>
)

export default Components;

