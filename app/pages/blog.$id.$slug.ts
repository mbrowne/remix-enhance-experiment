import type { LoaderData } from '~/routes/blog.$id.$slug'
import { renderPage } from '~/utils'

export default function ArticlePage(loaderData: LoaderData) {
    return renderPage(
        loaderData,
        (html) => html`
            <default-layout>
                <main>
                    <blog-article></blog-article>
                </main>
            </default-layout>
        `,
    )
}
