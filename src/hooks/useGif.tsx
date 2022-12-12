import { useState, useEffect } from "react";
import { getGifs, mapFromGetGifs } from "../services/getGifs";
import { GetGifs } from "../../types";
interface KeyProps {
    keyword: string
}

export function useGifts({keyword}: KeyProps) {
  const [gifs, setGifs] = useState<GetGifs["gifs"]>([]);

  useEffect(() => {
    getGifs(keyword)
      .then((gifs) => mapFromGetGifs(gifs))
      .then((res) => setGifs(res));
  }, [getGifs])
  return {gifs}
}
