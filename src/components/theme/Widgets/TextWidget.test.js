import React from "react";
import renderer from "react-test-renderer";
import { TextWidget } from "./TextWidget";

describe("TextWidget", () => {
  it("renders a text view widget component", () => {
    const component = renderer.create(
      <TextWidget
        data="Foo bar"
        schema={{id: "description"}}
        className="metadata"
      />
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
