import React from 'react';
import renderer from 'react-test-renderer';
import { BooleanWidget } from './BooleanWidget';

describe('BooleanWidget', () => {
  it('renders a boolean true view widget component', () => {
    const component = renderer.create(
      <BooleanWidget className="metadata">{true}</BooleanWidget>,
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('renders a boolean false view widget component', () => {
    const component = renderer.create(
      <BooleanWidget className="metadata">{false}</BooleanWidget>,
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
