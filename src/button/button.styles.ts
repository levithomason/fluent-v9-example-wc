import { css } from "@microsoft/fast-element";
import { display } from "@microsoft/fast-foundation";
import { tokens } from "@fluentui/react-theme";
import { appearanceBehavior } from "../utilities/appearance-behavior";
import { sizeBehavior } from "../utilities/size-behavior";

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

    :host([size][shape="circular"]) .base {
        border-radius: ${tokens.borderRadiusCircular};
    }

    :host([size][shape="square"]) .base {
        border-radius: ${tokens.borderRadiusNone};
    }

    :host([disabled]) .base,
    :host .base[aria-disabled="true"] {
        background-color: ${tokens.colorNeutralBackgroundDisabled};
        border-color: ${tokens.colorNeutralStrokeDisabled};
        color: ${tokens.colorNeutralForegroundDisabled};
        cursor: not-allowed;
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

        :host([appearance="primary"][disabled]) .base,
        :host([appearance="primary"][disabled]:hover) .base,
        :host([appearance="primary"][disabled]:active) .base,
        :host([appearance="primary"]) .base[aria-disabled="true"],
        :host([appearance="primary"]:hover) .base[aria-disabled="true"],
        :host([appearance="primary"]:active) .base[aria-disabled="true"] {
            background-color: ${tokens.colorNeutralBackgroundDisabled};
            border-color: ${tokens.colorNeutralStrokeDisabled};
            color: ${tokens.colorNeutralForegroundDisabled};
            cursor: not-allowed;
            border-color: transparent;
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

        :host([appearance="subtle"][disabled]) .base {
            background-color: ${tokens.colorNeutralBackgroundDisabled};
            border-color: ${tokens.colorNeutralStrokeDisabled};
            color: ${tokens.colorNeutralForegroundDisabled};
            cursor: not-allowed;
        }

        :host([appearance="subtle"][disabled]) .base,
        :host([appearance="subtle"][disabled]:hover) .base,
        :host([appearance="subtle"][disabled]:active) .base {
            background-color: transparent;
            border-color: transparent;
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

        :host([appearance="transparent"][disabled]) .base,
        :host([appearance="transparent"][disabled]:hover) .base,
        :host([appearance="transparent"][disabled]:active) .base {
            background-color: transparent;
            border-color: transparent;
            color: ${tokens.colorNeutralForegroundDisabled};
        }
    `),
    sizeBehavior("small", css`
        :host([size="small"]) .base {
            gap: 4px;
            padding: 0 8px;
            height: 24px;
            min-width: 64px;
            border-radius: ${tokens.borderRadiusSmall};
            font-size: ${tokens.fontSizeBase200};
            font-weight: ${tokens.fontWeightRegular};
            line-height: ${tokens.lineHeightBase200};
        }
    `),
    sizeBehavior("medium", css`
        :host([size="medium"]) .base {
            gap: 6px;
            padding: 0 12px;
            height: 32px;
            min-width: 96px;
            border-radius: ${tokens.borderRadiusMedium};
            font-size: ${tokens.fontSizeBase300};
            font-weight: ${tokens.fontWeightSemibold};
            line-height: ${tokens.lineHeightBase300};
        }
    `),
    sizeBehavior("large", css`
        :host([size="large"]) .base {
            gap: 6px;
            padding: 0 16px;
            height: 40px;
            min-width: 96px;
            border-radius: ${tokens.borderRadiusLarge};
            font-size: ${tokens.fontSizeBase300};
            font-weight: ${tokens.fontWeightSemibold};
            line-height: ${tokens.lineHeightBase300};
        }
    `)
);