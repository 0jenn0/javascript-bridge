import BridgeGameController from "./Controller/BridgeGameController.js";

class App {
  play() {
    const bridgeGameController = new BridgeGameController();
    bridgeGameController.start();
  }
}

const app = new App();

app.play();

export default App;
