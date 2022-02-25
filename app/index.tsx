import React from 'react';
import ReactDOM from 'react-dom';
import {
    FluentProvider,
    webLightTheme } from '@fluentui/react-components';
import { provideReactWrapper } from '@microsoft/fast-react-wrapper';
import { fluentButton, provideFluentDesignSystem } from "../src/index";

const layoutStyles = { display: "grid", gap: "12px", padding: "12px" }
const { wrap } = provideReactWrapper(
    React, 
    provideFluentDesignSystem()
);

export const FluentButton = wrap(fluentButton());
ReactDOM.render(
    <FluentProvider style={{ display: "grid", gap: "12px"}} theme={webLightTheme}>
        <div style={layoutStyles}>
            <FluentButton appearance="primary">Button</FluentButton>
        </div>
    </FluentProvider>,
    document.getElementById('root'),
);