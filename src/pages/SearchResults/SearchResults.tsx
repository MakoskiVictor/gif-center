import { Spinner } from "../../components/Spinner/Spinner";
import { useGifts } from "../../hooks/useGif";
import { KeywordProps } from '../../../types'


export const SearchResults = (props: KeywordProps) => {
    const {keyword} = props.params
    console.log("props", keyword, props)
  const { gifs } = useGifts({ keyword });

  return (
    <>
      <div /* className={styles.homeContainer} */>
        <div role="gifImage" /* className={styles.gifContainer} */>
          {gifs.length > 0 ? (
            gifs.map((g, index) => (
              <img
                /* className={styles.gifImages} */
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
