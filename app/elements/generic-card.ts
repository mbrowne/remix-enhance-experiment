import type { EnhanceElemArg } from '@enhance/types'

export default function GenericCard({
    html,
    state: { attrs },
}: EnhanceElemArg) {
    return html`
        <style>
            > div {
                display: flex;
                flex-direction: row;
                gap: 1rem;
            }
            .media img {
                display: block;
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
