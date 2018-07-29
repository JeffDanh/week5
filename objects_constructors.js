function Person(name, email, phone) { 
    this.name = name; 
    this.email = email; 
    this.phone = phone; 
} 

Person.prototype.greet = function(other) { 
    console.log('Hello ' + other.name + ', I am ' + this.name + '!'); 
};

var sonny = new Person('Sonny', 'sonny@hotmail.com', '483-485-4948');
var jordan = new Person('Jordon', 'jordan@aol.com', '495-586-3456');

console.log(sonny.greet(jordan));
console.log(jordan.greet(sonny));

console.log('Sonny: ' + sonny.email + ', ' + sonny.phone);
console.log('Jordan: ' + jordan.email + ', ' + jordan.phone);



// Card constructor
function Card(point, suit){
    this.point = point;
    this.suit = suit;

}

Card.prototype.getImageUrl = function(card){
    
}

Card.prototype.getImageUrl = function(card) {
    var pointUrl = '';
    switch(card[0]) {
        case 1: 
            pointUrl = 'A';
            break;
        case 11:
            pointUrl = 'J';
            break;
        case 12:
            pointUrl = 'Q';
            break;
        case 13:
            pointUrl = 'K';
            break;
        default:
            pointUrl = card[0];
    }
    var suitUrl = '';
    switch(card[1]) {
        case 'hearts':
            suitUrl = 'H';
            break;
        case 'diamonds':
            suitUrl = 'D';
            break;
        case 'clubs':
            suitUrl = 'C';
            break;
        case 'spades':
            suitUrl = 'S';
    }
    return `JPEG/${pointUrl}${suitUrl}.jpg`;
};

// Hand constructor
function Hand() {
    this.hand = [];
}

Hand.prototype.addCard = function(card) {
    this.hand.push(card);
}

Hand.prototype.getPoints = function() {
    var self = this;

    var points = self.hand.map(function(element) {
        return element.point;
    });

    let count = 0;
    points.forEach(function(element){
        count = count + element;
    });
    return count;
}

// Deck constructor
function Deck() {
    this.deck = [];
}

Deck.prototype.draw = function() {
    let cardIndex = Math.floor(Math.random() * deck.length);
    var randomCard = deck[cardIndex];
    randomCard.splice(cardIndex, 1);
    return randomCard;
}

Deck.prototype.shuffle = function() {
    for (var i = this.deck.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var place = this.deck[i];
        this.deck[i] = this.deck[j];
        this.deck[j] = place;
    }
    return this.deck;
}

Deck.prototype.numCardsLeft = function() {
    return this.deck.length;
}


var myHand = new Hand();
myHand.addCard(new Card(5, "diamonds"));
myHand.addCard(new Card(13, "spades"));
myHand.getPoints();

