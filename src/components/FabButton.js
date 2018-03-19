import React, { Component } from 'react';
import { bool, func, node } from 'prop-types';
import classnames from 'classnames';

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
