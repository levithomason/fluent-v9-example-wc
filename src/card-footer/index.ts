import { customElement, html } from '@microsoft/fast-element';
import { CardFooter } from "./card-footer";
import { cardFooterTemplate as template } from "./card-footer.template";
import { cardFooterStyles as styles } from "./card-footer.styles";

/**
 * A function that returns a Card registration for configuring the component with a DesignSystem.
 *
 *
 * @public
 * @remarks
 * Generates HTML Element: `<fluent-card-footer>`
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/delegatesFocus | delegatesFocus}
 */
@customElement({
    name: "fluent-card-footer",
    template,
    styles,
})
 export class FluentCardFooter extends CardFooter {}
