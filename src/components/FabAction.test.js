import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import FabAction from './FabAction';

describe('<FabAction />', () => {
  it('renders its children', () => {
    const wrapper = mount(
      <FabAction>
        Test
      </FabAction>
    );

    expect(wrapper.text()).to.contain('Test');

    const wrapperDiv = mount(
      <FabAction>
        <div className="wow">Test</div>
      </FabAction>
    );

    expect(wrapperDiv.find('.wow').length).to.be.equal(1);
  });

  it('uses classnames given to it', () => {
    const wrapper = mount(
      <FabAction
        className="test"
      />
    );

    expect(wrapper.html()).to.contain('test');
    expect(wrapper.find('.test').length).to.be.equal(1);
  });

  it('adds a tooltip with classes', () => {
    const wrapper = mount(
      <FabAction
        tooltip="Tooltip Text"
      />
    );

    expect(wrapper.text()).to.contain('Tooltip Text');
    expect(wrapper.html()).to.contain('fab-action__tooltip');
  });

  it('adds active classes', () => {
    const wrapper = mount(
      <FabAction
        tooltip="Tooltip Text"
        active
      >
        Test
      </FabAction>
    );

    expect(wrapper.find('.fab-action--active').length).to.be.equal(1);
    expect(wrapper.find('.fab-action__tooltip--active').length).to.be.equal(1);
  });
});
