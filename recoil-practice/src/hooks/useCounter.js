import { atom, selector, useRecoilState, useRecoilValue } from "recoil";

// 아톰 = 데이터 조각(키와 기본값만 설정)
const countState = atom({
  key: "count",
  default: 0,
});

// 셀렉터 - 아톰으로 부터 파생된 데이터 조각()
const oddEvenState = selector({
  key: "oddEvenState",
  get: ({ get }) => {
    const count = get(countState);
    return count % 2 === 0 ? "짝" : "홀";
  },
});

// 커스텀 Hook을 만들어 사용하는 예시 (일반 상태)
function useCounter() {
  const [count, setCount] = useRecoilState(countState); // 일반적인 Atom으로 사용하는 경우(Read, Write 동시에)
  const oddEven = useRecoilValue(oddEvenState); // READ-ONLY value (Atom 도 사용 가능)

  return { count, setCount, oddEven };
}

export default useCounter;
