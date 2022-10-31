// function User(name,email,role){     //<-Konstruktorius
//     this.name=name;
//     this.email=email;
//     this.role=role;
// }
//
//
// User.prototype.sayHi = function (){           //<-Metodas
//     console.log(`Yo. Mah name be ${this.name}. My email be ${this.email}. My role be de ${this.role}`)};
//
// User.prototype.ShowRole = function (){
//     console.log(`Grazinam tik role ${this.role}`)};


class User{         //<-O cia jau klases
    constructor(name,email,role) {
        this.name=name;
        this.email=email;
        this.role=role;
    }
    sayHi(){
        console.log(`Yo. Mah name be ${this.name}. My email be ${this.email}. My role be de ${this.role}`)};
    ShowRole(){
        console.log(`Grazinam tik role ${this.role}`)};
}


const userOne = new User(`Vardenis`,`Pavardenis`,`Admin`);  //Object Instance
userOne.sayHi();
userOne.ShowRole();
const userTwo = new User(`Petras`,`Petronijus`,`Student`);
userTwo.sayHi();
userOne.ShowRole();

console.log(userOne)