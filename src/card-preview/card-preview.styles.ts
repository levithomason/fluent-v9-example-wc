import { css } from "@microsoft/fast-element";
import { display } from "@microsoft/fast-foundation";

/**
 * Styles for Card Preview
 * @public
 */
export const cardPreviewStyles = css`
    ${display("block")} :host {
        position: relative;
    }

    .logo {
        position: absolute;
        bottom: 12px;
        left: 12px;
        width: 32px;
        height: 32px;
    }

    ::slotted(*) {
        display: block;
    }
`;