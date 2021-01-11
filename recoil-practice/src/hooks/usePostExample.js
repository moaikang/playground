import { useCallback } from "react";
import { atom, useSetRecoilState } from "recoil";
import axios from "axios";

const accountState = atom({
  key: "accountState",
  default: {
    id: "",
    name: "",
  },
});

function usePostExample() {
  const setAccount = useSetRecoilState(accountState);

  const register = useCallback(
    async (username) => {
      const response = await axios.post("someURL", {
        id: 1,
        name: "moai",
      });

      const { data: responseJson } = response;

      setAccount(responseJson);
    },
    [setAccount]
  );

  return register;
}

export default usePostExample;
