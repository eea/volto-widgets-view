import React from 'react';
import renderer from 'react-test-renderer';
import { DateWidget } from './DateWidget';

describe('DateWidget', () => {
  it('renders a date view widget component', () => {
    const component = renderer.create(
      <DateWidget className="metadata">2020-08-18</DateWidget>,
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
