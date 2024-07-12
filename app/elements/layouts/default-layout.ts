import type { EnhanceElemArg } from '@enhance/types'

export default function DefaultLayout({
    html,
    state: { attrs },
}: EnhanceElemArg) {
    return html`
        <!doctype html>
        <head>
            <title>${attrs.pageTitle}</title>
            <meta charset="utf-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <style>
                *,
                :after,
                :before {
                    box-sizing: border-box;
                }
                main {
                    margin-top: 2rem;
                }
                article {
                    display: block;
                    margin-bottom: 1em;
                }
            </style>
        </head>
        <body>
            <global-header></global-header>
            <slot />
        </body>
    `
}
