import { getQueriesForElement } from "@testing-library/react"

export type GifProps = Array<{
    id: string
    url: string
    title: string
}>
export type gifsMapProperties = {
    data: {
        id: string
        title: string

    }
}


export const getGifs = (): Promise<GifProps> => {
    return fetch('https://api.giphy.com/v1/gifs/trending?api_key=kI2OwJlo3bGk1RqEKyGgVY5wMe5X7KDn&limit=25&rating=g')
            .then(res => res.json())
}

export const mapFromGetGifs = ()