import { customElement } from "@microsoft/fast-element";
import { Button } from "./button";
import { buttonTemplate as template } from "./button.template";
import { buttonStyles as styles } from "./button.styles";

@customElement({
    name: 'test-button',
    template: template({}, {}),
    styles: styles({}, {}),
    shadowOptions: {
        delegatesFocus: true,
    },
})


export class FluentButton extends Button {}