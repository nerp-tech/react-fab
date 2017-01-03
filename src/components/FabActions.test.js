import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import FabActions from './FabActions';

describe('<FabActions />', () => {
  it('renders its children', () => {
    const wrapper = mount(
      <FabActions>
        Test
      </FabActions>
    );

    expect(wrapper.text()).to.contain('Test');

    const wrapperDiv = mount(
      <FabActions>
        <div className="wow">Test</div>
      </FabActions>
    );

    expect(wrapperDiv.find('.wow').length).to.be.equal(1);
  });

  it('adds active classes', () => {
    const wrapper = mount(
      <FabActions
        active
      >
        Test
      </FabActions>
    );

    expect(wrapper.find('.fab-actions--active').length).to.be.equal(1);
  });
});
