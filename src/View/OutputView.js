import { Console } from "@woowacourse/mission-utils";

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(currentCrossingProgress) {
    let topRow = [];
    let bottomRow = [];

    // 결과 배열을 순회하면서 각 칸의 상태를 설정
    currentCrossingProgress.forEach(({ direction, correct }) => {
      if (direction === "U") {
        topRow.push(correct); // 'U'인 경우 상단 행에 'O' 또는 'X' 추가
        bottomRow.push(" "); // 하단 행에 공백 추가
      } else {
        topRow.push(" "); // 상단 행에 공백 추가
        bottomRow.push(correct); // 'D'인 경우 하단 행에 'O' 또는 'X' 추가
      }
    });

    // 각 행을 문자열로 변환
    const topRowString = "[ " + topRow.join(" | ") + " ]";
    const bottomRowString = "[ " + bottomRow.join(" | ") + " ]";

    // 최종 출력
    const totalResult = topRowString + "\n" + bottomRowString;
    Console.print(totalResult);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {},
};

export default OutputView;
