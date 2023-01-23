import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { newGifs, isLoading } = useFetchGifs(category);
  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h4>Loading ...</h4>}
      <div className="card-grid">
        {newGifs.map((gif) => (
          <GifItem key={gif.id} {...gif} />
        ))}
      </div>
    </>
  );
};
