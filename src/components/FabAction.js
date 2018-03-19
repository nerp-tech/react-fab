import React, { Component } from 'react';
import { bool, node, string } from 'prop-types';
import classnames from 'classnames';

export default class FabAction extends Component {
  static propTypes = {
    active: bool,
    children: node,
    className: string,
    tooltip: string,
  }

  static defaultProps = {
    className: '',
  }

  render() {
    const {
      active,
      children,
      className,
      tooltip,
      ...props
    } = this.props;

    const buttonClassName = classnames(
      className,
      'fab-action',
      {
        'fab-action--active': active,
      },
    );

    const tooltipClassName = classnames(
      'fab-action__tooltip',
      {
        'fab-action__tooltip--active': active,
      }
    );

    const button = (
      <button className={buttonClassName} {...props}>
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
      </button>
    );

    if (tooltip) {
      return (
        <div>
          <div className={tooltipClassName}>
            {tooltip}
          </div>
          {button}
        </div>
      );
    } else {
      return button;
    }
  }
}
