import { selector, useRecoilValueLoadable } from "recoil";
import axios from "axios";

const randomCat = selector({
  key: "randomCat",
  get: async () => {
    try {
      const { data: catResponse } = await axios.get(
        "https://aws.random.cat/meow"
      );
      return catResponse.file;
    } catch (err) {
      throw new Error(err);
    }
  },
});

function useCats() {
  const randomCatURLLoadable = useRecoilValueLoadable(randomCat);
  return { randomCatURLLoadable };
}

export default useCats;
