import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [newGifs, setNewGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const images = await getGifs(category);
    setNewGifs(images);
    setIsLoading(false);
  };

  //! Use Effect no puede devolver una promesa, debe devolver una callback, es por eso que la función no debe ser async
  // useEffect(() => {
  //   getGifs(category).then((gifs) => {
  //     setNewGifs(gifs);
  //   });
  // }, []);

  useEffect(() => {
    getImages();
  }, []);

  return {
    newGifs,
    isLoading,
  };
};
