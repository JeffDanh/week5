function Person(name, email, phone) { 
    this.name = name; 
    this.email = email; 
    this.phone = phone; 
} 

Person.prototype.greet = function(other) { 
    console.log('Hello ' + other.name + ', I am ' + this.name + '!'); 
};

