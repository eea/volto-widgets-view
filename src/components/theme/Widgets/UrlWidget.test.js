import React from 'react';
import renderer from 'react-test-renderer';
import { UrlWidget } from './UrlWidget';

describe('UrlWidget', () => {
  it('renders an URL view widget component', () => {
    const component = renderer.create(
      <UrlWidget className="metadata">http://foobar.com</UrlWidget>,
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
