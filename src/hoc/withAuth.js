import React from 'react';

const withAuth = (WrappedComponent) => {
  return class withAuth extends React.Component {
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
      const { isAuth } = this.state;

      return (
        <WrappedComponent
          toggleAuth={this.toggleAuth}
          isAuth={isAuth}
          {...this.props}
        />
      )
    }
  }
}

export default withAuth;