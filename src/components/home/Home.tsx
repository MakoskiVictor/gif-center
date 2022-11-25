import { useEffect, useState } from "react"
import { getGifs } from './services/getGifs'

interface GifProps {
    id: string
    url: string
    title: string
}

interface GetGifs {
    gifs: Array<GifProps>
}

export const Home = (): JSX.Element => {

    const [gifs, setGifs] = useState<GetGifs['gifs']>([])
    useEffect(() => {
        getGifs()
        .then(gifs => setGifs(gifs))
    })

    return(
        <div>
            <h1>Home</h1>
            <div role='gifImage'>
                { gifs? gifs.map(g => <img role='gifImage' src={`${g.data.images.original.url}`} />) : <p>Loading...</p>}
            </div>
        </div>
    )
}

