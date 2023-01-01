import { useState, useEffect, useContext } from "react";
import { getGifs, mapFromGetGifs } from "../services/getGifs";
import { GetGifs } from "../../types";
import GifsContext from "../context/GifsContext"

export function useGifts(keyword: string) {
  /* const [gifs, setGifs] = useState<GetGifs["gifs"]>([]); */
  const {gifs, setGifs} = useContext(GifsContext)

  useEffect(() => {
    getGifs(keyword)
      .then((gifs) => mapFromGetGifs(gifs))
      .then((res) => setGifs(res));
  }, [getGifs])
  return {gifs}
}
