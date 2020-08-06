import React from 'react';
import renderer from 'react-test-renderer';
import { PasswordWidget } from './PasswordWidget';

describe('PasswordWidget', () => {
  it('renders an empty password view widget component', () => {
    const component = renderer.create(<PasswordWidget />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('renders a password view widget component', () => {
    const component = renderer.create(
      <PasswordWidget className="metadata">
        A very strong password
      </PasswordWidget>,
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
