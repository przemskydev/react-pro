import React from 'react'

const items = [
  { value: 'apple' },
  { value: 'pear' },
  { value: 'orange' },
  { value: 'grape' },
  { value: 'banana' },
]

const Components = () => {
  return (
    <div>
      <h1 className="title is-3 is-spaced">Components #renderprops #downshift 🏎</h1>

      <div className="dropdown is-active">
        <input className="input" type="text" placeholder="Text input" />
        <div className="dropdown-menu">
          <div className="dropdown-content">
            {
              items.map(({ value }) => (
                <button key={value} className="button is-white dropdown-item">{value}</button>
              ))
            }
          </div>
        </div>
      </div>

    </div>
  )
}

export default Components;

