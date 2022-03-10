import {
    Checkbox as FoundationCheckbox
} from "@microsoft/fast-foundation";
import { attr } from '@microsoft/fast-element';

 /**
 * Types of checkbox size.
 * @public
 */
  export type CheckboxSize =
  | "medium"
  | "large";

/**
 * @internal
 */
export class Checkbox extends FoundationCheckbox {
    /**
     * The size the button should have.
     *
     * @public
     * @remarks
     * HTML Attribute: shape
     */
    @attr
    public size: CheckboxSize = "medium";

    /**
     * The label precedes the input
     *
     * @public
     * @remarks
     * HTML Attribute: label-before
     */
    @attr({ attribute: "label-before", mode: "boolean" })
    public labelBefore: boolean = false;
}