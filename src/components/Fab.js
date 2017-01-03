import React, { Component, PropTypes } from 'react';
import FabButton from './FabButton';

const { node } = PropTypes;

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
