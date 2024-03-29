export class Persona {
  public firstName: string;
  public lastName: string;
  public age: number;

  public greet(): string {
    return `hello my name is ${this.firstName} ${this.lastName}`;
  }
  constructor(fn: string, ln: string, ag: number) {
    this.firstName = fn;
    this.lastName = ln;
    this.age = ag;
  }
}
