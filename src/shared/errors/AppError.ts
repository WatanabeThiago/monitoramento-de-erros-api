class AppError {
  public readonly message: string;

  public readonly statusCode: number;

  public readonly errorName: string | undefined;

  constructor(
    message: string,
    statusCode = 400,
    errorName?: string | undefined,
  ) {
    this.message = message;
    this.statusCode = statusCode;
    this.errorName = errorName || undefined;
  }
}

export default AppError;
