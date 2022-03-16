import { customElement, css } from '@microsoft/fast-element';
import { Button } from "../button/button";
import { buttonStyles } from "../button/button.styles";
import { buttonTemplate as template } from "./menu-button.template";

/**
 * A function that returns a Button registration for configuring the component with a DesignSystem.
 * Implements {@link @microsoft/fast-foundation#buttonTemplate}
 *
 *
 * @public
 * @remarks
 * Generates HTML Element: `<fluent-button>`
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/delegatesFocus | delegatesFocus}
 */
@customElement({
    name: "fluent-menu-button",
    template,
    styles: css`
        ${buttonStyles}

        .icon-only slot[name="end"] > svg {
            display: none;
        }
    `,
    shadowOptions: {
        delegatesFocus: true,
    },
})
export class FluentMenuButton extends Button {}
