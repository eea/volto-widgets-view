import React from 'react';
import renderer from 'react-test-renderer';
import { TokenWidget } from './TokenWidget';
import { MemoryRouter } from 'react-router-dom';

describe('TokenWidget', () => {
  it('renders an empty view widget based on @plone/volto Tags component', () => {
    const component = renderer.create(
      <MemoryRouter>
        <TokenWidget />
      </MemoryRouter>,
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('renders view widget based on @plone/volto Tags component', () => {
    const component = renderer.create(
      <MemoryRouter>
        <TokenWidget className="meta tags">{['foo', 'bar']}</TokenWidget>
      </MemoryRouter>,
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
