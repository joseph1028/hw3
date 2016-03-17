'use strict'
class Character {
  constructor (name){
    this.name=name;
  }
 printGreeting(){
   console.log (`Hola, I am ${this.name}!!OUO`);
 }
}

var person1 = new Character('Richa');
person1.printGreeting();

var person2 = new Character('Luki');
person2.printGreeting();
