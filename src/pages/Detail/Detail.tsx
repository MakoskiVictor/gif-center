import { useContext } from "react";
import { ParamsDetail } from "../../../types";
import GifsContext from "../../context/GifsContext"
import { Spinner } from "../../components/Spinner/Spinner";

export const Detail = ({ params }: ParamsDetail) => {
    const {gifs} = useContext(GifsContext)
  console.log(params, gifs);
  const unitGif = gifs.filter(el => el.id === params.id)
  console.log(unitGif)
  return <div>
    {unitGif.length > 0 ?
        <img src={unitGif[0].url} alt="Gif buscado" />
        :
        <Spinner/>
}
  </div>;
};
