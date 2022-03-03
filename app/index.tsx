/** @jsx h */ /* Note: Set the JSX pragma to the wrapped version of createElement */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// eslint-disable-next-line import/order
import h from "./pragma"; /* Note: Import wrapped createElement. */

import ReactDOM from 'react-dom';
import {
    FluentProvider,
    webLightTheme } from '@fluentui/react-components';

import { FluentButton } from "../src/index";

const layoutStyles = { display: "grid", gap: "12px", padding: "12px" }

ReactDOM.render(
    <FluentProvider style={{ display: "grid", gap: "12px"}} theme={webLightTheme}>
        <div style={layoutStyles}>
            <FluentButton appearance="primary">button</FluentButton>
        </div>
    </FluentProvider>,
    document.getElementById('root'),
);
