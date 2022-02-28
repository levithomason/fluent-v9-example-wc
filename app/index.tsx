import React from 'react';
import ReactDOM from 'react-dom';
import {
    FluentProvider,
    webLightTheme } from '@fluentui/react-components';
import { fluentButton, provideFluentDesignSystem  } from "../src/index";

const layoutStyles = { display: "grid", gap: "12px", padding: "12px" }

provideFluentDesignSystem().register(fluentButton())

class FluentButtonTest extends React.Component {
    render() {
      return <fluent-button appearance="primary">unwrapped button</fluent-button>;
    }
  }



ReactDOM.render(
    <FluentProvider style={{ display: "grid", gap: "12px"}} theme={webLightTheme}>
        <div style={layoutStyles}>
            <FluentButtonTest>Test</FluentButtonTest>
        </div>
    </FluentProvider>,
    document.getElementById('root'),
);