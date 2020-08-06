import React from 'react';
import renderer from 'react-test-renderer';
import { SelectWidget } from './SelectWidget';

describe('SelectWidget', () => {
  it('renders an empty select view widget component', () => {
    const component = renderer.create(<SelectWidget />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('renders a select view widget component', () => {
    const component = renderer.create(
      <SelectWidget className="metadata">{{ title: 'Foo Bar' }}</SelectWidget>,
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('renders a full select view widget component', () => {
    const component = renderer.create(
      <SelectWidget className="metadata">
        {{ title: 'Foo Bar', token: 'foobar' }}
      </SelectWidget>,
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
