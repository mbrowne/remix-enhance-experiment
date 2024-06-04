import enhance from '@enhance/ssr'
import elements from '~/elements'
import type { LoaderData } from '~/routes/blog.$id.$slug'

export default function ArticlePage(loaderData: LoaderData) {
    const html = enhance({
        elements,
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
        </head>
        <body>
            <global-header></global-header>
            <main>
                <blog-article></blog-article>
            </main>
        </body>
    `
}
