import { css } from "@microsoft/fast-element";
import { display } from "@microsoft/fast-foundation";
import { tokens } from "@fluentui/react-theme";

/**
 * Styles for Button
 * @public
 */
export const buttonStyles = (context: any, definition: any) => css`
    ${display("inline-block")} {
        align-items: center;
        justify-content: center;
        vertical-align: middle;
        margin: 0;
        max-width: 280px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        background-color: ${tokens.colorNeutralBackground1};
        color: ${tokens.colorNeutralForeground1};
        border: ${tokens.strokeWidthThin} solid ${tokens.colorNeutralStroke1};
        font-family: ${tokens.fontFamilyBase};
        outline-style: none;
    }
`;

//
// background-color: tokens.colorNeutralBackground1,
// color: tokens.colorNeutralForeground1,
// ...shorthands.border(tokens.strokeWidthThin, solid, tokens.colorNeutralStroke1),

// fontFamily: tokens.fontFamilyBase,

// outlineStyle: none,