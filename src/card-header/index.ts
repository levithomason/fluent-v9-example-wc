import { customElement, html } from '@microsoft/fast-element';
import { CardHeader } from "./card-header";
import { cardHeaderTemplate as template } from "./card-header.template";
import { cardHeaderStyles as styles } from "./card-header.styles";

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
    name: "fluent-card-header",
    template,
    styles
})
 export class FluentCardHeader extends CardHeader {}
