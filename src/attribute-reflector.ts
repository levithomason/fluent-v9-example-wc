import { DOM } from "@microsoft/fast-element";
import type { Behavior } from "@microsoft/fast-element";
import { SubscriberSet } from "@microsoft/fast-element";
import { AttachedBehaviorHTMLDirective } from "@microsoft/fast-element";
import type { CaptureType } from "@microsoft/fast-element";

class ReflectAttrBehavior implements Behavior {
    private static mutate: MutationCallback = (mutations: MutationRecord[])  => {
        for (const mutation of mutations){
            const target = ReflectAttrBehavior.targets.get(mutation.target as HTMLElement);

            if (target) {
                target.notify(mutation.attributeName)
            }
        }
    }

    private static observer = new MutationObserver(ReflectAttrBehavior.mutate)

    private static targets: WeakMap<HTMLElement, SubscriberSet> = new WeakMap();

    private observerConfig: MutationObserverInit;
    constructor(private target: HTMLElement, private attributes: string[]) {
        this.observerConfig = { attributes: true, attributeFilter: this.attributes }
    }

    public bind(source: HTMLElement): void {
        ReflectAttrBehavior.targets.set(source, new SubscriberSet(source, this));
        ReflectAttrBehavior.observer.observe(source, this.observerConfig);


        // If any attributes are set prior to binding, reflect them
        if (source.hasAttributes()) {
            const attrs = source.attributes;
            for (let i = 0; i < attrs.length; i++) {
                if (this.attributes.includes(attrs[i].name)) {
                    this.handleChange(source, attrs[i].name);
                }
            }
        }
    }

    public unbind(source: any): void {}

    public handleChange(source: HTMLElement, arg: string): void {
        const value = source.getAttribute(arg);
        DOM.queueUpdate(() => {
            value ? this.target.setAttribute(arg, value) : this.target.removeAttribute(arg)
        });
    }
}

export function reflectAttributes<T = any>(...attributes: string[] ): CaptureType<T> {
    return new AttachedBehaviorHTMLDirective("fast-reflect-attr", ReflectAttrBehavior, attributes)
}
