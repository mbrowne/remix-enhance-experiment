import { createHtmlFunction } from '~/libs/enhance'
import type { LoaderData } from '~/routes/blog'
import { mapConcat } from '~/utils'

export default function BlogIndexPage(loaderData: LoaderData) {
    const html = createHtmlFunction({
        initialState: loaderData,
    })

    return html`
        <default-layout pageTitle="Blog">
            <main>
                ${mapConcat(
                    loaderData.articles,
                    (article) =>
                        html`<article>
                            <a href="${article.url}">${article.title}</a>
                        </article>`,
                )}
            </main>
        </default-layout>
    `
}
