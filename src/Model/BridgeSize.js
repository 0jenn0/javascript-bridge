import BridgeSizeValidator from "../Validator/BridgeSizeValidator.js";

export default class BridgeSize {
  #bridgeSize;

  constructor(inputBridgeSize) {
    BridgeSizeValidator.validateIsNum(inputBridgeSize);
    BridgeSizeValidator.validateRange(inputBridgeSize);
    this.#bridgeSize = inputBridgeSize;
  }

  getSize() {
    return this.#bridgeSize;
  }
}
