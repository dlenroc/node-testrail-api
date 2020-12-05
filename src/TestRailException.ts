export class TestRailException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'TestRailException';
  }
}
