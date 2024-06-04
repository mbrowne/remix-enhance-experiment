import enhance from '@enhance/ssr'
import styleTransform from '@enhance/enhance-style-transform'
import elements from '~/elements'

export function createHtmlFunction({ initialState }: { initialState: any }) {
    return enhance({
        elements,
        initialState,
        styleTransforms: [styleTransform],
    })
}
