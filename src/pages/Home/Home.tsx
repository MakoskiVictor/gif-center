import { useState } from "react";
import styles from "./home.module.css";
import { Spinner } from "../../components/Spinner/Spinner";
import { useLocation } from "wouter";
import { useGifts } from "../../hooks/useGif";
import { Link } from "wouter";

export const Home = (): JSX.Element => {
  const [keyword, setKeyword] = useState<string>("");
  const [path, pushLocation] = useLocation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setKeyword(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    pushLocation(`/search/${keyword}`);
  };

  const { gifs } = useGifts("gif");

  return (
    <>
      <form className={styles.search} onSubmit={handleSubmit}>
        <input
          className={styles.searcher}
          placeholder='Search gif...'
          type='text'
          value={keyword}
          onChange={handleChange}
        />
      </form>
      <div className={styles.homeContainer}>
        <div role='gifImage' className={styles.gifContainer}>
          {gifs.length > 0 ? (
            gifs.map((g, index) => (
              <Link to={`gif/${g.title}`}>
                <img
                  loading='lazy'
                  className={styles.gifImages}
                  key={index}
                  role='gifImage'
                  src={`${g.url}`}
                />
              </Link>
            ))
          ) : (
            <Spinner />
          )}
        </div>
      </div>
    </>
  );
};
