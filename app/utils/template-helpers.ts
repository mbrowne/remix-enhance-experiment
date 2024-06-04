const separator = process.env.NODE_ENV === 'development' ? '\n' : ''

export function mapConcat<TItem>(
    collection: TItem[],
    mapCallback: (value: TItem, index: number, array: TItem[]) => string,
) {
    return collection.map(mapCallback).join(separator)
}
