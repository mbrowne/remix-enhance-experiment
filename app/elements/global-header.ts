import type { EnhanceElemArg } from '@enhance/types'

export default function GlobalHeader({ html }: EnhanceElemArg) {
    return html`
        <header>
            <h1>Header</h1>
            <nav>
                <a href=/>home</a>
                <a href="/about">about</a>
            </nav>
        </header>
    `
}
