import React from 'react';
import renderer from 'react-test-renderer';
import { RichTextWidget } from './RichTextWidget';

describe('RichTextWidget', () => {
  it('renders an empty rich text view widget component', () => {
    const component = renderer.create(<RichTextWidget />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
  it('renders a rich text view widget component', () => {
    const component = renderer.create(
      <RichTextWidget className="metadata">
        {{ data: '<b>Foo bar</b>' }}
      </RichTextWidget>,
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
