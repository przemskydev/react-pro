import React from 'react';
import styles from './ItemList.module.scss'
import cx from 'classnames';

const items = [
  `1. Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.`,
  `2. Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.`,
  `3. Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.`,
  `4. Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.`,
  `5. Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.`,
];

class ItemList extends React.Component {
  constructor(props){
    super(props)
    this.state={
      isCollapsed: false
    }
  }

  toggle = () => {
    this.setState(prevState => ({
      isCollapsed: !prevState.isCollapsed
    }));
   };

  render() {

    const classList = cx(styles.list, {
      [styles.isCollapsed]: this.state.isCollapsed
    })

    return (
      <div>
        <button className="button is-link is-rounded" onClick={this.toggle}>Collapse</button>

        <ul className={classList}>
          {items.map(item => (
            <li className='notification is-primary'>{item}</li>
          ))}
        </ul>

        <p>State isCollapsed is: {this.state.isCollapsed.toString()}</p>
      </div>
    )
  }

}

export default ItemList;
