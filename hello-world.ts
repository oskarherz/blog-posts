export class HelloWorldPrinter {

  private worldLiteral: string;

  constructor() {
    this.worldLiteral = 'World';
  }
  
  /*
   * Prints "Hello World" to the console.
   **/
  public printHelloWorld(): void {
    console.log(`Hello ${this.worldLiteral}!`);
  }
}
