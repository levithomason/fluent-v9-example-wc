import { css } from "@microsoft/fast-element";
import { display } from "@microsoft/fast-foundation";
import { tokens } from '@fluentui/react-theme';
import { sizeBehavior } from '../utilities/size-behavior';

/** Presence Badge styles
 * @public
 */
export const presenceBadgeStyles = css`
    ${display("inline-flex")} :host {
        box-sizing: border-box;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background-color: ${tokens.colorNeutralBackground1};
    }

    :host([outofoffice]) {
        color: ${tokens.colorNeutralBackground1};
    }

    :host([status="away"]) {
        color: ${tokens.colorPaletteMarigoldBackground3};
    }
    :host([status="available"]) {
        color: ${tokens.colorPaletteLightGreenForeground3};
    }
    :host([status="offline"]),
    :host([outofoffice][status="offline"]) {
        color: ${tokens.colorNeutralForeground3};
    }
    :host([status="outofoffice"]),
    :host([outofoffice][status="outofoffice"]) {
        color: ${tokens.colorPaletteBerryForeground3};
    }
    :host([outofoffice][status="available"]) {
        color: ${tokens.colorPaletteLightGreenForeground3};
    }
    :host([outofoffice][status="away"]) {
        color: ${tokens.colorPaletteMarigoldBackground3};
    }

    :host([status="busy"]),
    :host([status="donotdisturb"]),
    :host([status="unknown"]),
    :host([outofoffice][status="busy"]),
    :host([outofoffice][status="donotdisturb"]),
    :host([outofoffice][status="unknown"]) {
        color: ${tokens.colorPaletteRedBackground3};
    }

    slot,
    ::slotted(*) {
        fill: currentColor;
    }
`.withBehaviors(
    sizeBehavior("tiny", css`
        :host([size="tiny"]) {
            width: 6px;
            height: 6px;
            font-size: 4px;
        }

        ::slotted(svg) {
            font-size: 6px;
        }
    `),
    sizeBehavior("extra-small", css`
        :host([size="extra-small"]) {
            width: 10px;
            height: 10px;
            font-size: 6px;
        }

        ::slotted(svg) {
            font-size: 10px;
        }
    `),
    sizeBehavior("small", css`
        :host([size="small"]) {
            min-width: 16px;
            height: 16px;
            font-size: 8px;
            padding: 2px;
            gap: 4px;   
        }

        ::slotted(svg) {
            font-size: 12px;
        }
    `),
    sizeBehavior("medium", css`
        :host([size="medium"]) {
            min-width: 20px;
            height: 20px;
            font-size: 10px;
            padding: 4px;
            gap: 4px;
        }

        ::slotted(svg) {
            font-size: 12px;
        }
    `),
    sizeBehavior("large", css`
        :host([size="large"]) {
            min-width: 24px;
            height: 24px;
            font-size: 12px;
            padding: 4px;
            gap: 4px;    
        }

        ::slotted(svg) {
            font-size: 16px;
        }
    `),
    sizeBehavior("extra-large", css`
        :host([size="extra-large"]) {
            min-width: 32px;
            height: 32px;
            font-size: 12px;
            padding: 6px;
            gap: 6px;
            border-width: ${tokens.strokeWidthThick};
        }

        ::slotted(svg) {
            font-size: 20px;
        }
    `),
);