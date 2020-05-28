import React from 'react';

class Authorisation extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        isAuth: false
      }
    }

    toggleAuth = () => {
      this.setState(prevState => ({
        isAuth: !prevState.isAuth
      }));
    };

    render() {

      const renderProps = {
        isAuth: this.state.isAuth,
        toggleAuth: this.toggleAuth
      }

      return  this.props.render(renderProps)
    }
  }


export default Authorisation;