import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["naruto"]);

  const onAddCategory = (newCategory) => {
    // setCategories((c) => ["valorant", ...categories]);
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>Gif Expert App</h1>
      <AddCategory
        //? Es valido pero estaríamos obligando a que nos envíen el setCategory cada vez que alguien quiera usar el componente
        // setCategory={setCategories}
        newCategory={onAddCategory}
      />

      <button onClick={onAddCategory}>Add</button>

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
