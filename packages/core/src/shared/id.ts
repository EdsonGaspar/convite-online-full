export class Id {
  static novo(): string {
    return `${this.rash()} - ${this.rash()} - ${this.rash()}`;
  }
  private static rash(): string {
    return Math.random().toString(36).substring(2, 15);
  }
}

console.log(Id.novo());
