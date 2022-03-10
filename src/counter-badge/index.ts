import { customElement } from '@microsoft/fast-element';
import { Badge } from "./counter-badge";
import { badgeTemplate as template } from "../badge/badge.template";
import { counterBadgeStyles as styles } from "./counter-badge.styles";

/**
 * THe Badge component
 *
 *
 * @public
 * @remarks
 * Generates HTML Element: `<fluent-counter-badge>`
 */
@customElement({
    name: "fluent-counter-badge",
    template,
    styles,
})
 export class FluentBadge extends Badge {}
