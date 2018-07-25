// Object Exercises 2

// Inheritance
var mom = { 
    firstName: 'Alice', 
    lastName: 'Wong', 
    eyeColor: 'brown', 
    hairColor: 'black',
    showInfo: function () {
        // console.log('firstName: ${this.firstName}');
        // console.log('lastName: ${this.lastName}');
        // console.log('eyeColor: ${this.eyeColor}');
        // console.log('hairColor: ${this.hairColor}');

        console.log('firstName: ', this.firstName);
        console.log('lastName: ', this.lastName);
        console.log('eyeColor', this.eyeColor);
        console.log('hairColor: ', this.hairColor);

    } 
}; 

var daughter = { 
    firstName: 'Ilene', 
    hairColor: 'brown' 
};

daughter.__proto__ = mom;
console.log('firstName: ', daughter.firstName);
console.log('lastName: ', daughter.lastName);
console.log('eyeColor', daughter.eyeColor);
console.log('hairColor: ', daughter.hairColor);

console.log(mom.showInfo());
console.log(daughter.showInfo());

// Person
// function Person(name) { 
//     this.name = name; 
//     this.friends = []; 
// } 

// Person.prototype.addFriend = function(friend) { 
//     this.friends.push(friend); 
// }; 

// Person.prototype.createGreeting = function(other) { 
//     return 'Yo ' + other.name + '! from ' + this.name + '.';
// };

// Person.prototype.greet = function(other) {
//     console.log(this.createGreeting(other)); 
// };
class Person {
    constructor(name){
        this.name = name;
        this.friends = [];
    }
    addFriend(friend){
        this.friends.push(friend);
    }
    createGreeting(other){
        return 'Yo ' + other.name + '! from ' + this.name + '.';
    }
    greet(other){
        console.log(this.createGreeting(other));
    }
    lazyGreet(other){
        var self = this;
        setTimeout(function(){
            console.log(self.createGreeting(other));
        }, 2000); 
    }
    createGreetingsForFriends(){
        var self = this;
        var arr = self.friends.map(function(element){
            return self.createGreeting(element);
        });
        console.log(arr);
    }
}

var alfie = new Person('Alfie'); 
var anushka = new Person('Anushka'); 
var henrique = new Person('Henrique'); 
alfie.addFriend(anushka); 
alfie.addFriend(henrique); 
alfie.createGreetingsForFriends();

alfie.lazyGreet(anushka);
alfie.greet(anushka);
