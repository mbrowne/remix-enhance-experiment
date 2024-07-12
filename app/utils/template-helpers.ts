import { createHtmlFunction } from '~/libs/enhance'

const separator = process.env.NODE_ENV === 'development' ? '\n' : ''

export function renderPage(
    loaderData: any,
    callback: (html: ReturnType<typeof createHtmlFunction>) => string,
) {
    return callback(
        createHtmlFunction({
            initialState: loaderData,
        }),
    )
}

export function mapConcat<TItem>(
    collection: TItem[],
    mapCallback: (value: TItem, index: number, array: TItem[]) => string,
) {
    return collection.map(mapCallback).join(separator)
}
