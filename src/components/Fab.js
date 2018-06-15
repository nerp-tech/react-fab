import React, { Component } from 'react';
import { node } from 'prop-types';
import FabButton from './FabButton';

export default class Fab extends Component {
  static propTypes = {
    children: node,
  }

  state = {
    active: false,
  }

  handleToggle = () => {
    this.setState({
      active: !this.state.active,
    });
  }

  handleClose = () => {
    this.setState({
      active: false,
    });
  }

  render() {
    const { children, ...props } = this.props;
    const { active } = this.state;

    if (children === null || typeof children === 'undefined' || children.length === 0) {
      return null;
    }

    return (
      <div className="fab-container" {...props}>
        {
          React.Children.map(children, (element, index) => {
            const options = {
              active,
              key: index,
              onClose: this.handleClose,
            };

            if (element && element.type === FabButton) {
              options.onClick = this.handleToggle;
            }

            if (React.isValidElement(element)) {
              return React.cloneElement(element, options);
            } else {
              return element;
            }
          })
        }
      </div>
    );
  }
}
