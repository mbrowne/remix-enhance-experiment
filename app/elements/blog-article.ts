import type { EnhanceElemArg } from '@enhance/types'
import type { LoaderData } from '~/routes/blog.$id.$slug'

export default function BlogArticle({ html, state }: EnhanceElemArg) {
    console.log('state: ', JSON.stringify(state, null, 2))
    const { title, body } = state.store as LoaderData

    return html`
        <article>
            <h1>${title}</h1>
            ${body}
        </article>
        <aside>
            <related-articles></related-articles>
        </aside>
    `
}
