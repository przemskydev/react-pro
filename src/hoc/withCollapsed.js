import React from 'react';

const withCollapsed = (WrappedComponent) => {
  return class WithCollapsed extends React.Component {
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
      const {isCollapsed} = this.state;

      return (
        <WrappedComponent
          toggle={this.toggle}
          isCollapsed={isCollapsed}
          
        />
      )
    }
  }
}

export default withCollapsed;