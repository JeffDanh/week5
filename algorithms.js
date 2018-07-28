// Challenge 1
function prime(num){
    for(var x = 2; x<num; x++){
        if(num % x == 0){
            return false;
        }
    }
}
function conjecture(){
    var int = [];
    var result = 1;
    while(true){
        result += 2;
        var j = 0;
        while(result >= int[j]){
            if()
        }

    }
}

var primes = [];
var compositePrimes = [];
    
function createPrimes( start, end){

}



// Challenge 2
function beer(){
    for(var x = 99; x > 0; x--){
        var next = x-1;
        if(x % 7 == 0 && x % 5 == 0){
            console.log(x + ' Bottles of Miller Lite, take one down, pass it around, ' + next +  'bottles of Miller Lite on the wall. ')
    
        }
        else if(x % 7 == 0){
            console.log(x + ' Bottles of Miller, take one down, pass it around, ' + next +  'bottles of Miller on the wall. ')
    
        }
        else if(x % 5 == 0){
            console.log(x + ' Bottles of Lite beer, take one down, pass it around, ' + next +  'bottles of Lite beer on the wall. ')
    
        }
        else{
            console.log(x + ' Bottles of beer, take one down, pass it around, ' + next +  'bottles of beer on the wall. ')
    
        }
        
    }
}



// Challenge 3
function maxDuffelBagValue(arr){
    var highestValue = 0;
    arr.forEach(function(element){

    });
}

var cakeTypes = [
        {weight: 7, value: 160},
        {weight: 3, value: 90},
        {weight: 2, value: 15},
    ];

var capacity = 20;
maxDuffelBagValue(cakeTypes, capacity);