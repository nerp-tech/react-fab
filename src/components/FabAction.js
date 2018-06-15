import React, { Component } from 'react';
import { bool, func, node, string } from 'prop-types';
import classnames from 'classnames';

export default class FabAction extends Component {
  static propTypes = {
    active: bool,
    children: node,
    className: string,
    closeOnClick: bool,
    onClick: func,
    onClose: func,
    tooltip: string,
  }

  static defaultProps = {
    className: '',
    closeOnClick: true,
  }

  handleClick = (e) => {
    const { closeOnClick, onClick, onClose } = this.props;

    if (closeOnClick && onClose) {
      onClose();
    }

    if (onClick) {
      onClick(e);
    }
  }

  render() {
    const {
      active,
      children,
      className,
      closeOnClick, // eslint-disable-line no-unused-vars
      onClick, // eslint-disable-line no-unused-vars
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
      <button className={buttonClassName} onClick={this.handleClick} {...props}>
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
