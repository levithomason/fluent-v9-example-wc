import { customElement, html } from '@microsoft/fast-element';
import { Card } from "./card";
import { cardStyles as styles } from "./card.styles";

/**
 * A function that returns a Card registration for configuring the component with a DesignSystem.
 *
 *
 * @public
 * @remarks
 * Generates HTML Element: `<fluent-card>`
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/delegatesFocus | delegatesFocus}
 */
@customElement({
    name: "fluent-card",
    template: html`<slot></slot>`,
    styles,
    shadowOptions: {
        delegatesFocus: true,
    },
})
 export class FluentCard extends Card {}
