import React from 'react';
import renderer from 'react-test-renderer';
import { PasswordWidget } from './PasswordWidget';

describe('PasswordWidget', () => {
  it('renders a text view widget component', () => {
    const component = renderer.create(
      <PasswordWidget className="metadata">
        A very strong password
      </PasswordWidget>,
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
