import type { EnhanceElemArg } from '@enhance/types'
import { mapConcat } from '~/utils'
import type { LoaderData } from '~/routes/blog.$id.$slug'

export default function RelatedArticles({ html, state }: EnhanceElemArg) {
    // console.log('state: ', JSON.stringify(state, null, 2))
    const { relatedArticles } = state.store as LoaderData

    return html`
        <div>
            <h3>Related Articles</h3>
            <ul>
                ${mapConcat(
                    relatedArticles,
                    (article) =>
                        html`<li>
                            <generic-card>
                                <generic-card.header>
                                    <a href="${article.url}"
                                        >${article.title}</a
                                    >
                                </generic-card.header>
                            </generic-card>
                        </li>`,
                )}
            </ul>
        </div>
    `
}
