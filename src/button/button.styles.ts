import { css } from "@microsoft/fast-element";
import { display } from "@microsoft/fast-foundation";
import { tokens } from "@fluentui/react-theme";
import { appearanceBehavior } from "../utilities/appearance-behavior";

/**
 * Styles for Button
 * @public
 */
export const buttonStyles = (context: any, definition: any) => css`
    ${display("inline-block")} .base {
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

    :host(:hover) .base {
        background-color: ${tokens.colorNeutralBackground1Hover};
        border-color: ${tokens.colorNeutralStroke1Hover};
        color: ${tokens.colorNeutralForeground1};
        cursor: pointer;
    }

    :host(:active) .base {
        background-color: ${tokens.colorNeutralBackground1Pressed};
        border-color: ${tokens.colorNeutralStroke1Pressed};
        color: ${tokens.colorNeutralForeground1};
        outline-style: none;
    }

    :host([shape="circular"]) .base {
        border-radius: ${tokens.borderRadiusCircular};
    }

    :host([shape="square"]) {
        border-radius: ${tokens.borderRadiusNone};
    }
`.withBehaviors(
    appearanceBehavior("primary", css`
        :host([appearance="primary"]) .base {
            background-color: ${tokens.colorBrandBackground};
            border-color: transparent;
            color: ${tokens.colorNeutralForegroundOnBrand};
        }

       :host([appearance="primary"]:hover) .base {
            background-color: ${tokens.colorBrandBackgroundHover};
            border-color: transparent;
            color: ${tokens.colorNeutralForegroundOnBrand};
        }

        :host([appearance="primary"]:active) .base {
            background-color: ${tokens.colorBrandBackgroundPressed};
            border-color: transparent;
            color: ${tokens.colorNeutralForegroundOnBrand};
        }
    `),
    appearanceBehavior("subtle", css`
        :host([appearance="subtle"]) .base {
            background-color: ${tokens.colorSubtleBackground};
            border-color: transparent;
            color: ${tokens.colorNeutralForeground2};
        }

       :host([appearance="subtle"]:hover) .base {
            background-color: ${tokens.colorSubtleBackgroundHover};
            border-color: transparent;
            color: ${tokens.colorNeutralForeground2BrandHover};
        }

        :host([appearance="subtle"]:active) .base {
            background-color: ${tokens.colorSubtleBackgroundPressed};
            border-color: transparent;
            color: ${tokens.colorNeutralForeground2BrandPressed};
        }
    `),
    appearanceBehavior("outline", css`
        :host([appearance="outline"]) .base {
            background-color: ${tokens.colorTransparentBackground};
        }

       :host([appearance="outline"]:hover) .base {
            background-color: ${tokens.colorTransparentBackgroundHover};
        }

        :host([appearance="outline"]:active) .base {
            background-color: ${tokens.colorTransparentBackgroundPressed};
        }
    `),
    appearanceBehavior("transparent", css`
        :host([appearance="transparent"]) .base {
            background-color: ${tokens.colorTransparentBackground};
            border-color: transparent;
            color: ${tokens.colorNeutralForeground2};
        }

       :host([appearance="transparent"]:hover) .base {
            background-color: ${tokens.colorTransparentBackgroundHover};
            border-color: transparent;
            color: ${tokens.colorNeutralForeground2BrandHover};
        }

        :host([appearance="transparent"]:active) .base {
            background-color: ${tokens.colorTransparentBackgroundPressed};
            border-color: transparent;
            color: ${tokens.colorNeutralForeground2BrandPressed};
        }
    `)
);