import AppError from "../Error/AppError.js";

export default class MovingValidator {
  static UP = "U";
  static DOWN = "D";

  validateDirection(input) {
    const trimmedInput = input.trim();
    if (
      trimmedInput != MovingValidator.UP ||
      trimmedInput != MovingValidator.DOWN
    ) {
      throw new AppError('이동할 칸은 "U" 또는 "D"만 입력 가능합니다.');
    }
  }
}
