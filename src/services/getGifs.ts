import { API_KEY } from "./settings"
import { GIPHY_BASE_URL } from "./settings"

export type GifProps = Array<{
    id: string
    url: string
    title: string
}>
export type gifsFetchedProperties = {
    data: [{
        id: string
        title: string
        images: {
            original: {
                url: string
            }
        }
    }]
}



export const mapFromGetGifs = (apiResponse: gifsFetchedProperties): GifProps => {
    const mappedGifs = apiResponse
    return mappedGifs.data.map(el => {
        return {
            id: el.id,
            url: el.images.original.url,
            title: el.title
        }
    })
}
export const getGifs = async ( keyword : string | null): Promise<gifsFetchedProperties> => {
    if(!keyword) keyword = 'random'
    return fetch(`${GIPHY_BASE_URL}trending?api_key=${API_KEY}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`)
            .then(res => res.json())
}
