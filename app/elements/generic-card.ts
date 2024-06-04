import type { EnhanceElemArg } from '@enhance/types'

export default function GenericCard({
    html,
    state: { attrs },
}: EnhanceElemArg) {
    return html`
        <style>
            :host .body {
                /* test */
                color: green;
                font-weight: bold;

                display: flex;
                flex-direction: row;
                gap: 4rem;
            }
        </style>
        <div class="${attrs.classname}">
            <slot name="media"></slot>
            <div class="body">
                <slot />
            </div>
        </div>
    `
}

export function CardHeader({ html }: EnhanceElemArg) {
    return html`<header><slot /></header>`
}
