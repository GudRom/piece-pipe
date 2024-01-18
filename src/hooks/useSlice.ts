import { MAX_SONGS_FOR_SLICE } from "config/config";
import { useState } from "react";

export const useSlice = () => {
  const [currentSlice, setCurrentSlice] = useState(MAX_SONGS_FOR_SLICE);

  const getMore = () => {
    setCurrentSlice((prev) => prev + MAX_SONGS_FOR_SLICE);
  };

  const getLess = () => {
    setCurrentSlice(MAX_SONGS_FOR_SLICE);
  };

  return { getMore, currentSlice, getLess };
};
