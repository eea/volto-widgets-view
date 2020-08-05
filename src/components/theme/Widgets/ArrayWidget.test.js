import React from 'react';
import renderer from 'react-test-renderer';
import { ArrayWidget } from './ArrayWidget';

describe('ArrayWidget', () => {
  it('renders a simple array view widget component', () => {
    const component = renderer.create(
      <ArrayWidget className="metadata">{['foo', 'bar']}</ArrayWidget>,
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('renders a vocabulary array view widget component', () => {
    const component = renderer.create(
      <ArrayWidget className="metadata">
        {[{ title: 'Foo' }, { title: 'Bar' }]}
      </ArrayWidget>,
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('renders a full vocabulary array view widget component', () => {
    const component = renderer.create(
      <ArrayWidget className="metadata">
        {[
          { title: 'Foo', token: 'foo' },
          { title: 'Bar', token: 'bar' },
        ]}
      </ArrayWidget>,
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
