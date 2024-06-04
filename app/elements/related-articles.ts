import type { EnhanceElemArg } from '@enhance/types'
import { mapConcat } from '~/utils'
import type { LoaderData } from '~/routes/blog.$id.$slug'

export default function RelatedArticles({ html, state }: EnhanceElemArg) {
    // console.log('state: ', JSON.stringify(state, null, 2))
    const { relatedArticles } = state.store as LoaderData

    return html`
        <style>
            ul {
                list-style: none;
                padding: 0;
            }
            li {
                padding-bottom: 2rem;
            }
        </style>
        <div>
            <h3>Related Articles</h3>
            <ul>
                ${mapConcat(
                    relatedArticles,
                    (article, i) =>
                        html`<li>
                            <generic-card>
                                <div slot="media">
                                    <img
                                        width="150"
                                        height="100"
                                        src="${`https://picsum.photos/seed/${i + 10}/150/100`}"
                                        alt="demo photo"
                                    />
                                </div>
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
