import type { EnhanceElemArg } from '@enhance/types'

export default function GlobalHeader({ html }: EnhanceElemArg) {
    return html`
        <header>
            <h1>Enhance-SSR + Remix</h1>
            <nav>
                <a href=/>home</a>
                <a href="/blog">blog</a>
            </nav>
        </header>
    `
}
