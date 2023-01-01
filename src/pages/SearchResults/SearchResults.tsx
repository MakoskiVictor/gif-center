import { Spinner } from "../../components/Spinner/Spinner";
import { useGifts } from "../../hooks/useGif";
import { KeywordProps } from "../../../types";
import { Link } from "wouter";
import styles from "../Home/home.module.css";
import { FRONT_URL } from '../../../constants'

export const SearchResults = (props: KeywordProps) => {
  const { keyword } = props.params;
  const { gifs } = useGifts(keyword);

  return (
    <>
      <div className={styles.homeContainer}>
        <div role='gifImage' className={styles.gifContainer}>
          {gifs.length > 0 ? (
            gifs.map((g) => (
              <Link to={`${FRONT_URL}gif/${g.id}`}>
                <img
                  loading='lazy'
                  className={styles.gifImages}
                  key={g.id}
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
