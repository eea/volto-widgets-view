import React from 'react';
import renderer from 'react-test-renderer';
import { EmailWidget } from './EmailWidget';

describe('EmailWidget', () => {
  it('renders an empty email view widget component', () => {
    const component = renderer.create(<EmailWidget />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('renders an email view widget component', () => {
    const component = renderer.create(
      <EmailWidget className="metadata">foo@bar.com</EmailWidget>,
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
