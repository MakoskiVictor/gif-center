import { useEffect, useState } from "react";
import { getGifs, mapFromGetGifs } from "../../services/getGifs";
import styles from "./home.module.css";
import { Spinner } from "../../components/Spinner/Spinner";
import { useLocation } from "wouter";
import {GetGifs} from '../../../types'


export const Home = (): JSX.Element => {
  const [gifs, setGifs] = useState<GetGifs["gifs"]>([]);
  const [keyword, setKeyword] = useState<string>("");

  const [path, pushLocation] = useLocation()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setKeyword(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
     pushLocation(`/search/${keyword}`) 
  };

  useEffect(() => {
    if (gifs.length === 0) {
      getGifs(null)
        .then((gifs) => mapFromGetGifs(gifs))
        .then((res) => setGifs(res));
    }
    return;
  }, []);

  return (
    <>
      <form className={styles.search} onSubmit={handleSubmit}>
        <input
          className={styles.searcher}
          placeholder="Search gif..."
          type="text"
          value={keyword}
          onChange={handleChange}
        />
      </form>
      <div className={styles.homeContainer}>
        <div role="gifImage" className={styles.gifContainer}>
          {gifs.length > 0 ? (
            gifs.map((g, index) => (
              <img
                className={styles.gifImages}
                key={index}
                role="gifImage"
                src={`${g.url}`}
              />
            ))
          ) : (
            <Spinner />
          )}
        </div>
      </div>
    </>
  );
};
