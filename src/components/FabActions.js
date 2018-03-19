import React, { Component } from 'react';
import { bool, node } from 'prop-types';
import classnames from 'classnames';

export default class FabActions extends Component {
  static propTypes = {
    active: bool,
    children: node,
  }

  render() {
    const { active, children } = this.props;

    const className = classnames(
      'fab-actions',
      {
        'fab-actions--active': active,
      }
    );

    return (
      <div className={className}>
        {
          React.Children.map(children, (element, index) => {
            const options = {
              active,
              key: index,
            };

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
