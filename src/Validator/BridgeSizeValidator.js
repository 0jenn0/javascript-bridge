import AppError from "../Error/AppError.js";

export default class BridgeSizeValidator {
  static MAX_SIZE = 20;
  static MIN_SIZE = 3;

  static validateIsNum(input) {
    if (Number.isNaN(Number(input))) {
      throw new AppError("다리 길이는 숫자만 입력할 수 있습니다.");
    }
  }

  static validateRange(input) {
    if (
      input > BridgeSizeValidator.MAX_SIZE ||
      input < BridgeSizeValidator.MIN_SIZE
    ) {
      throw new AppError("다리 길이는 3이상 20이하만 가능합니다.");
    }
  }
}
