'use strict'
class Character {
  constructor (name){
    this.name=name;
  }
  printGreeting(){
   console.log (`Hola, I am ${this.name}!!OUO`);
 }
}

class Employee extends Character{
  constructor(name,job){
    super(name);
    this.job=job
  }
  printGreeting(){
    super.printGreeting();
    console.log (`Hola, I am ${this.name},and I am a ${this.job}`);
  }
}

var person1 = new Character('Richa');
person1.printGreeting();

var person2 = new Employee('Luki','doctor');
person2.printGreeting();
