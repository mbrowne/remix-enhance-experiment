import { createHtmlFunction } from '~/libs/enhance'
import type { LoaderData } from '~/routes/blog'
import { mapConcat } from '~/utils'

export default function BlogIndexPage(loaderData: LoaderData) {
    const html = createHtmlFunction({
        initialState: loaderData,
    })

    return html`
        <!doctype html>
        <head>
            <title>Blog</title>
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
            <main>
                ${mapConcat(
                    loaderData.articles,
                    (article) =>
                        html`<article>
                            <a href="${article.url}">${article.title}</a>
                        </article>`,
                )}
            </main>
        </body>
    `
}
