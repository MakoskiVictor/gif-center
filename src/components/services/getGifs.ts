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


export const getGifs = async (): Promise<gifsFetchedProperties> => {
    return fetch('https://api.giphy.com/v1/gifs/trending?api_key=kI2OwJlo3bGk1RqEKyGgVY5wMe5X7KDn&limit=24&rating=g')
            .then(res => res.json())
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