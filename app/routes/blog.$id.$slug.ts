import type { LoaderFunctionArgs } from '@remix-run/node'
import ArticlePage from '~/pages/blog.$id.$slug'
import { getArticleById, getRelatedArticles } from '~/services/blog'

type ArticleTeaser = {
    slug: string
    url: string
    title: string
}

export type LoaderData = {
    slug: string
    title: string
    body: string
    relatedArticles: ArticleTeaser[]
}

export async function loader({ params }: LoaderFunctionArgs) {
    // console.log('params', params)

    const articleId = params.id
    console.log('articleId: ', articleId)
    const article = getArticleById(articleId)

    if (!article) {
        throw new Response('404 Not found', {
            status: 404,
        })
    }

    const loaderData: LoaderData = {
        ...article,
        relatedArticles: getRelatedArticles(articleId),
    }

    return new Response(ArticlePage(loaderData), {
        headers: {
            'content-type': 'text/html',
        },
    })
}
