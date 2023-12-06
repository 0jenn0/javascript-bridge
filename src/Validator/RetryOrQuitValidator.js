import AppError from "../Error/AppError";

export default class RetryOrQuitValidator {
  static RETRY = "R";
  static QUIT = "Q";

  validateCommandValidity() {
    const trimmedInput = input.trim();
    if (
      trimmedInput != RetryOrQuitValidator.RETRY ||
      trimmedInput != RetryOrQuitValidator.QUIT
    ) {
      throw new AppError('"Q"또는 "R"를 입력해주세요.');
    }
  }
}
