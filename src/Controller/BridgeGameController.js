import BridgeMaker from "../BridgeMaker.js";
import BridgeRandomNumberGenerator from "../BridgeRandomNumberGenerator.js";
import InputView from "../View/InputView.js";
import OutputView from "../View/OutputView.js";

export default class BridgeGameController {
  async start() {
    const bridgeSize = await InputView.readBridgeSize();
    const bridge = BridgeMaker.makeBridge(
      bridgeSize,
      BridgeRandomNumberGenerator.generate
    );
    let directions = [];
    let attemptCount = 1;

    console.log({ bridge });

    let currentCrossingProgress = [];

    while (directions.length <= Number(bridgeSize)) {
      if (directions.length === Number(bridgeSize)) {
        break;
      }
      const direction = await InputView.readMoving();
      directions.push(direction);
      currentCrossingProgress = this.compare(bridge, directions);
      if (
        currentCrossingProgress[currentCrossingProgress.length - 1].correct ===
        "X"
      ) {
        OutputView.printMap(currentCrossingProgress);
        const retryOrQuit = await InputView.readGameCommand();
        if (retryOrQuit === "Q") break;
        attemptCount += 1;
        directions.pop();
        continue;
      } else OutputView.printMap(currentCrossingProgress);
    }

    console.log("최종 게임 결과");
    OutputView.printMap(currentCrossingProgress);

    let failOrSuccess = "";

    if (currentCrossingProgress.some((item) => item.correct === "X")) {
      failOrSuccess = "실패";
    } else {
      failOrSuccess = "성공";
    }

    console.log("게임 성공 여부: ", failOrSuccess);

    console.log("총 시도한 횟수: ", attemptCount);
  }

  compare(bridge, directions) {
    let result = [];
    for (let i = 0; i < directions.length; i++) {
      if (bridge[i] === directions[i]) {
        bridge[i] === "U"
          ? result.push({ direction: "U", correct: "O" })
          : result.push({ direction: "D", correct: "O" });
      } else {
        bridge[i] === "U"
          ? result.push({ direction: "D", correct: "X" })
          : result.push({ direction: "U", correct: "X" });
      }
    }
    return result;
  }
}
