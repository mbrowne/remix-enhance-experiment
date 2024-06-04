import { createHtmlFunction } from '~/libs/enhance'
import type { LoaderData } from '~/routes/blog.$id.$slug'

export default function ArticlePage(loaderData: LoaderData) {
    const html = createHtmlFunction({
        initialState: loaderData,
    })

    return html`
        <!doctype html>
        <head>
            <title>${loaderData.title}</title>
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
            </style>
        </head>
        <body>
            <global-header></global-header>
            <main>
                <blog-article></blog-article>
            </main>
        </body>
    `
}
