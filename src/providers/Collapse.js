import React from 'react';

class Collapse extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        isCollapsed: false
      }
    }

    toggle = () => {
      this.setState(prevState => ({
        isCollapsed: !prevState.isCollapsed
      }));
    };

    render() {
      const renderProps = {
        isCollapsed: this.state.isCollapsed,
        toggle: this.toggle
      }

     return this.props.render(renderProps);
    }
  }

export default Collapse;