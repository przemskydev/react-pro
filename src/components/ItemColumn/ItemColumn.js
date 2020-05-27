import React from 'react';
import styles from './ItemColumn.module.scss'
import cx from 'classnames';
import withCollapsed from '../../hoc/withCollapsed'

// class ItemColumn extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       isCollapsed: false
//     }
//   }

//   toggle = () => {
//     this.setState(prevState => ({
//       isCollapsed: !prevState.isCollapsed
//     }));
//   };

//   render() {
const ItemColumn = ({ toggle, isCollapsed }) => {
  const classList = cx("columns", {
    [styles.isCollapsed]: isCollapsed
  })

  return (
    <>
      <button className="button is-link is-rounded" onClick={toggle}>Collapse</button>

      <div className={classList}>
        <div className="column">
          <div className='notification is-primary'>Tips #1</div>
        </div>
        <div className="column">
          <div className='notification is-primary'>Tips #2</div>
        </div>
        <div className="column">
          <div className='notification is-primary'>Tips #3</div>
        </div>
        <div className="column">
          <div className='notification is-primary'>Tips #4</div>
        </div>
      </div>
      
      <p>State isCollapsed is: {isCollapsed.toString()}</p>
    </>
  )
}
// }


export default withCollapsed(ItemColumn);