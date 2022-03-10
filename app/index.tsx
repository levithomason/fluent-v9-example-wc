/** @jsx h */ /* Note: Set the JSX pragma to the wrapped version of createElement */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// eslint-disable-next-line import/order
import h from "./pragma"; /* Note: Import wrapped createElement. */

import ReactDOM from "react-dom";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";

import { FluentButton } from "../src/index";

const layoutStyles = { display: "grid", gap: "12px", padding: "12px" };

enum Component {
  Button = "button",
  Mixed = "mixed",
  Card = "card",
}

type Repeat = string;

const component = new URLSearchParams(window.location.search).get(
  "component"
) as Component;
const repeat = new URLSearchParams(window.location.search).get(
  "repeatNum"
) as Repeat;

const repeatNumber = parseInt(repeat);
const renderComponent = () => {
  switch (component) {
    case Component.Button:
      return repeatNumber > 0 ? (
        [...Array(repeatNumber)].map((e, i) => (
          <FluentButton appearance="primary" key={i}>
            Button
          </FluentButton>
        ))
      ) : (
        <FluentButton appearance="primary">Button</FluentButton>
      );
    case Component.Card:
      return <div>this is a card</div>;
    case Component.Mixed:
      return <div>this is a mixed</div>;
    default:
      return <FluentButton appearance="primary">Button</FluentButton>;
  }
};

ReactDOM.render(
  <FluentProvider
    style={{ display: "grid", gap: "12px" }}
    theme={webLightTheme}
  >
    <div style={layoutStyles}>{renderComponent()}</div>
  </FluentProvider>,
  document.getElementById("root")
);
