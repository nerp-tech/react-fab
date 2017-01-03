import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

const { bool, func, node } = PropTypes;

export default class FabButton extends Component {
  static propTypes = {
    active: bool,
    children: node,
    onClick: func,
  }

  render() {
    const { active, children, onClick } = this.props;

    const classNames = classnames(
      'fab-button',
      {
        'fab-button--active': active,
      }
    );

    return (
      <button className={classNames} onClick={onClick}>
        {children}
      </button>
    );
  }
}
