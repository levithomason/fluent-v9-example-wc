import React from 'react';
import ReactDOM from 'react-dom';
import {
    FluentProvider,
    webLightTheme } from '@fluentui/react-components';
import { provideReactWrapper } from '@microsoft/fast-react-wrapper';
import { FluentButton } from "../src/index";

const layoutStyles = { display: "grid", gap: "12px", padding: "12px" }
const { wrap } = provideReactWrapper(
    React
);

export const FluentButtonTest = wrap(FluentButton);
ReactDOM.render(
    <FluentProvider style={{ display: "grid", gap: "12px"}} theme={webLightTheme}>
        <div style={layoutStyles}>
            <FluentButtonTest appearance="primary">Test</FluentButtonTest>
        </div>
    </FluentProvider>,
    document.getElementById('root'),
);