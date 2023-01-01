export interface GifProps {
    id: string;
    url: string;
    title: string;
  }
  
export   interface GetGifs {
    gifs: Array<GifProps>;
  }

export interface KeywordProps {
    params: {
        keyword: string
    }
}

export type ParamsDetail = {
  params: {
    id: String;
  };
};