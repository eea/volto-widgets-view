import React from "react";
import renderer from "react-test-renderer";
import { TokenWidget } from "./TokenWidget";
import { MemoryRouter } from 'react-router-dom';

describe("TokenWidget", () => {
  it("renders view widget based on @plone/volto Tags component", () => {
    const component = renderer.create(
      <MemoryRouter>
        <TokenWidget
          data={["foo", "bar"]}
          schema={{id: "subjects"}}
          className="meta"
        />
      </MemoryRouter>
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
