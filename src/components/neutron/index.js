import React, { Component, PropTypes } from 'react';
import initNeutron from 'neutron-client';;

export default class Neutorn extends Component {
  static childContextTypes = {
    neutron: PropTypes.object
  };

  state = {

  };

  constructor(props) {
    super(props);

    initNeutron({
      host: 'http://localhost:9001'
    }).then(neutron => {
      this.setState({ neutron });
    });
  }

  getChildContext() {
    return {
      neutron: this.state.neutron
    };
  }

  render() {
    if (!this.state.neutron) {
      return (
        <div>
          Loading
        </div>
      );
    }

    return this.props.children;
  }
}
