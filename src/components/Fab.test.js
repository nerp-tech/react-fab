import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import Fab from './Fab';
import FabButton from './FabButton';

describe('<Fab />', () => {
  it('returns null when no children', () => {
    const wrapper = mount(<Fab />);

    expect(wrapper.html()).to.be.null;
  });

  it('renders its children', () => {
    const wrapper = mount(
      <Fab>
        Test
      </Fab>
    );

    expect(wrapper.text()).to.contain('Test');

    const wrapperDiv = mount(
      <Fab>
        <div>Test</div>
      </Fab>
    );

    expect(wrapperDiv.text()).to.contain('Test');
  });

  it('toggles to active when clicked', () => {
    const wrapper = mount(
      <Fab>
        <FabButton>Test</FabButton>
      </Fab>
    );

    expect(wrapper.state().active).to.be.false;

    wrapper.find('FabButton').simulate('click');

    expect(wrapper.state().active).to.be.true;
  });

  it('toggles to inactive when clicked', () => {
    const wrapper = mount(
      <Fab>
        <FabButton>Test</FabButton>
      </Fab>
    );

    wrapper.setState({ active: true });

    wrapper.find('FabButton').simulate('click');

    expect(wrapper.state().active).to.be.false;
  });
});
