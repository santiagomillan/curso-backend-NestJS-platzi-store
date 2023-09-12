const age = 19;
console.log(age);
const suma = (a: number, b: number) => {
  return a + b;
}
suma(12, 2);
class Person {
  constructor(private age: number, private name: string) { }
  getSummary() {
    return `I'm ${this.name} and I'm ${this.age}`;
  }
}


const nicolas = new Person(15, "nicolas");
nicolas.getSummary();
