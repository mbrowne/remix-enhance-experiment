import { createCookie, createMemorySessionStorage } from '@remix-run/node' // or cloudflare/deno

const sessionCookie = createCookie('__session', {
    secrets: ['r3m1xr0ck5'],
    sameSite: true,
})

const { getSession, commitSession, destroySession } =
    createMemorySessionStorage({
        cookie: sessionCookie,
    })

export { getSession, commitSession, destroySession }
