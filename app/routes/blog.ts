import BlogIndexPage from '~/pages/blog'
import { getAllArticles } from '~/services/blog'
import type { ArticleTeaser } from '~/services/blog'

export type LoaderData = {
    articles: ArticleTeaser[]
}

export async function loader() {
    const loaderData: LoaderData = {
        articles: getAllArticles(),
    }
    return new Response(BlogIndexPage(loaderData), {
        headers: {
            'content-type': 'text/html',
        },
    })
}
