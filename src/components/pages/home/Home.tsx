import { useEffect, useState } from "react"
import { getGifs, mapFromGetGifs } from '../../services/getGifs'
import styles from './home.module.css'

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
        getGifs('random')
        .then(gifs => mapFromGetGifs(gifs))
        .then(res => setGifs(res))
    }, [])

    return(
        <div className={styles.homeContainer}>
            <div role='gifImage' className={styles.gifContainer}>
                { gifs? gifs.map((g, index) => <img className={styles.gifImages}  key={index} role='gifImage' src={`${g.url}`} />) : <p>Loading...</p>}
            </div>
        </div>
    )
}

