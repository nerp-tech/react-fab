import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';
import FabButton from './FabButton';

describe('<FabButton />', () => {
  it('renders children', () => {
    const wrapper = mount(
      <FabButton>
        Test
      </FabButton>
    );

    expect(wrapper.text()).to.contain('Test');
  });

  it('adds an onclick handler', () => {
    const spy = sinon.spy();

    const wrapper = mount(
      <FabButton onClick={spy}>
        Test
      </FabButton>
    );

    wrapper.find('FabButton').simulate('click');

    expect(spy).to.have.been.calledOnce;
  });

  it('adds the active class', () => {
    const wrapper = mount(
      <FabButton active>
        Test
      </FabButton>
    );

    expect(wrapper.find('button').props().className).to.contain('--active');
  });
});
