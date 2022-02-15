import React from 'react';
import ReactDOM from 'react-dom';
import {
    FluentProvider,
    teamsDarkTheme,
    teamsLightTheme,
    webDarkTheme,
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
        <h1 style={{ padding: "0 12px" }}>Fluent UI v9 as Web Components</h1>
        <div style={layoutStyles}>
            <h2>Light theme - web</h2>
            <FluentButton>Button</FluentButton>
            <FluentButton appearance="primary">Button</FluentButton>
        </div>
        <FluentProvider style={layoutStyles} theme={webDarkTheme}>
            <h2>Dark theme - web</h2>
            <FluentButton>Button</FluentButton>
            <FluentButton appearance="primary">Button</FluentButton>
        </FluentProvider>
        <FluentProvider style={layoutStyles} theme={teamsLightTheme}>
            <h2>Light theme - Teams</h2>
            <FluentButton>Button</FluentButton>
            <FluentButton appearance="primary">Button</FluentButton>
        </FluentProvider>
        <FluentProvider style={layoutStyles} theme={teamsDarkTheme}>
            <h2>Dark theme - Teams</h2>
            <FluentButton>Button</FluentButton>
            <FluentButton appearance="primary">Button</FluentButton>
        </FluentProvider>
    </FluentProvider>,
    document.getElementById('root'),
);