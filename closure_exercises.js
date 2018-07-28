// Counter 1
function counter(){
    var start = 0;
    var count = function(){
        start++;
        return start;
    }
    return count;
}
var count1 = counter();
var count2 = counter();


// Counter 2
function counter(num){
    var start = num;
    var count = function(){
        start++;
        return start;
    }
    return count;
}
var count1 = counter(4);

// Counter 3
// function counter(num){
//     var start = num;
//     var increment = function(){
//         var count = function(){
//             start++;
//             return start;
//         }
//         return count;
//     }
//     return increment;
        
//     var decrement = function(){
//         var count = function(){
//             start--;
//             return start;
//         }
//         return count;
//     }
//     return decrement;
// }
// var count = counter(4);

function Counter(num){
    this.num = num;
}
Counter.prototype.increment = function() {
    this.num += 1;
    return this.num;
    
}
Counter.prototype.decrement = function(){
    this.num -= 1;
    return this.num;
}
var count = new Counter(4);
count.increment();
count.increment();
count.decrement();
count.decrement();
