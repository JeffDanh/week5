function play(){
    var deck = [ {point: 1, suit: 'spades'}, {point: 1, suit: 'clubs'}, {point: 1, suit: 'diamonds'}, {point: 1, suit: 'hearts'}, 
        {point: 2, suit: 'spades'}, {point: 2, suit: 'clubs'}, {point: 2, suit: 'diamonds'}, {point: 2, suit: 'hearts'}, 
        {point: 3, suit: 'spades'}, {point: 3, suit: 'clubs'}, {point: 3, suit: 'diamonds'}, {point: 3, suit: 'hearts'}, 
        {point: 4, suit: 'spades'}, {point: 4, suit: 'clubs'}, {point: 4, suit: 'diamonds'}, {point: 4, suit: 'hearts'}, 
        {point: 5, suit: 'spades'}, {point: 5, suit: 'clubs'}, {point: 5, suit: 'diamonds'}, {point: 5, suit: 'hearts'}, 
        {point: 6, suit: 'spades'}, {point: 6, suit: 'clubs'}, {point: 6, suit: 'diamonds'}, {point: 6, suit: 'hearts'}, 
        {point: 7, suit: 'spades'}, {point: 7, suit: 'clubs'}, {point: 7, suit: 'diamonds'}, {point: 7, suit: 'hearts'}, 
        {point: 8, suit: 'spades'}, {point: 8, suit: 'clubs'}, {point: 8, suit: 'diamonds'}, {point: 8, suit: 'hearts'}, 
        {point: 9, suit: 'spades'}, {point: 9, suit: 'clubs'}, {point: 9, suit: 'diamonds'}, {point: 9, suit: 'hearts'}, 
        {point: 10, suit: 'spades'}, {point: 10, suit: 'clubs'}, {point: 10, suit: 'diamonds'}, {point: 10, suit: 'hearts'}, 
        {point: 11, suit: 'spades'}, {point: 11, suit: 'clubs'}, {point: 11, suit: 'diamonds'}, {point: 11, suit: 'hearts'}, 
        {point: 12, suit: 'spades'}, {point: 12, suit: 'clubs'}, {point: 12, suit: 'diamonds'}, {point: 12, suit: 'hearts'}, 
        {point: 13, suit: 'spades'}, {point: 13, suit: 'clubs'}, {point: 13, suit: 'diamonds'}, {point: 13, suit: 'hearts'} 
        
    ];
    function shuffleDeck(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    function getCardImageUrl(card){
        if(card.point == 1 && card.suit == 'spades'){
            return "JPEG/AS.jpg";
        }
        if(card.point == 1 && card.suit == 'clubs'){
            return "JPEG/AC.jpg";
        }
        if(card.point == 1 && card.suit == 'diamonds'){
            return "JPEG/AD.jpg";
        }
        if(card.point == 1 && card.suit == 'hearts'){
            return "JPEG/AH.jpg";
        }
        if(card.point == 2 && card.suit == 'spades'){
            return "JPEG/2S.jpg";
        }
        if(card.point == 2 && card.suit == 'clubs'){
            return "JPEG/2C.jpg";
        }
        if(card.point == 2 && card.suit == 'diamonds'){
            return "JPEG/2D.jpg";
        }
        if(card.point == 2 && card.suit == 'hearts'){
            return "JPEG/2H.jpg";
        }
        if(card.point == 3 && card.suit == 'spades'){
            return "JPEG/3S.jpg";
        }
        if(card.point == 3 && card.suit == 'clubs'){
            return "JPEG/3C.jpg";
        }
        if(card.point == 3 && card.suit == 'diamonds'){
            return "JPEG/3D.jpg";
        }
        if(card.point == 3 && card.suit == 'hearts'){
            return "JPEG/3H.jpg";
        }
        if(card.point == 4 && card.suit == 'spades'){
            return "JPEG/4S.jpg";
        }
        if(card.point == 4 && card.suit == 'clubs'){
            return "JPEG/4C.jpg";
        }
        if(card.point == 4 && card.suit == 'diamonds'){
            return "JPEG/4D.jpg";
        }
        if(card.point == 4 && card.suit == 'hearts'){
            return "JPEG/4H.jpg";
        }
        if(card.point == 5 && card.suit == 'spades'){
            return "JPEG/5S.jpg";
        }
        if(card.point == 5 && card.suit == 'clubs'){
            return "JPEG/5C.jpg";
        }
        if(card.point == 5 && card.suit == 'diamonds'){
            return "JPEG/5D.jpg";
        }
        if(card.point == 5 && card.suit == 'hearts'){
            return "JPEG/5H.jpg";
        }
        if(card.point == 6 && card.suit == 'spades'){
            return "JPEG/6S.jpg";
        }
        if(card.point == 6 && card.suit == 'clubs'){
            return "JPEG/6C.jpg";
        }
        if(card.point == 6 && card.suit == 'diamonds'){
            return "JPEG/6D.jpg";
        }
        if(card.point == 6 && card.suit == 'hearts'){
            return "JPEG/6H.jpg";
        }
        if(card.point == 7 && card.suit == 'spades'){
            return "JPEG/7S.jpg";
        }
        if(card.point == 7 && card.suit == 'clubs'){
            return "JPEG/7C.jpg";
        }
        if(card.point == 7 && card.suit == 'diamonds'){
            return "JPEG/7D.jpg";
        }
        if(card.point == 7 && card.suit == 'hearts'){
            return "JPEG/7H.jpg";
        }
        if(card.point == 8 && card.suit == 'spades'){
            return "JPEG/8S.jpg";
        }
        if(card.point == 8 && card.suit == 'clubs'){
            return "JPEG/8C.jpg";
        }
        if(card.point == 8 && card.suit == 'diamonds'){
            return "JPEG/8D.jpg";
        }
        if(card.point == 8 && card.suit == 'hearts'){
            return "JPEG/8H.jpg";
        }
        if(card.point == 9 && card.suit == 'spades'){
            return "JPEG/9S.jpg";
        }
        if(card.point == 9 && card.suit == 'clubs'){
            return "JPEG/9C.jpg";
        }
        if(card.point == 9 && card.suit == 'diamonds'){
            return "JPEG/9D.jpg";
        }
        if(card.point == 9 && card.suit == 'hearts'){
            return "JPEG/9H.jpg";
        }
        if(card.point == 10 && card.suit == 'spades'){
            return "JPEG/10S.jpg";
        }
        if(card.point == 10 && card.suit == 'clubs'){
            return "JPEG/10C.jpg";
        }
        if(card.point == 10 && card.suit == 'diamonds'){
            return "JPEG/10D.jpg";
        }
        if(card.point == 10 && card.suit == 'hearts'){
            return "JPEG/10H.jpg";
        }
        if(card.point == 11 && card.suit == 'spades'){
            return "JPEG/JS.jpg";
        }
        if(card.point == 11 && card.suit == 'clubs'){
            return "JPEG/JC.jpg";
        }
        if(card.point == 11 && card.suit == 'diamonds'){
            return "JPEG/JD.jpg";
        }
        if(card.point == 11 && card.suit == 'hearts'){
            return "JPEG/JH.jpg";
        }
        if(card.point == 12 && card.suit == 'spades'){
            return "JPEG/QS.jpg";
        }
        if(card.point == 12 && card.suit == 'clubs'){
            return "JPEG/QC.jpg";
        }
        if(card.point == 12 && card.suit == 'diamonds'){
            return "JPEG/QD.jpg";
        }
        if(card.point == 12 && card.suit == 'hearts'){
            return "JPEG/QH.jpg";
        }
        if(card.point == 13 && card.suit == 'spades'){
            return "JPEG/KS.jpg";
        }
        if(card.point == 13 && card.suit == 'clubs'){
            return "JPEG/KC.jpg";
        }
        if(card.point == 13 && card.suit == 'diamonds'){
            return "JPEG/KD.jpg";
        }
        if(card.point == 13 && card.suit == 'hearts'){
            return "JPEG/KH.jpg";
        }
        
    }

    var dealerHand = document.getElementById("dealer-hand");
    var playerHand = document.getElementById("player-hand");

    var dealerCards = [];
    var playerCards = [];
    var deck1 = shuffleDeck(deck);

    // var $deal = $("deal-button");
    $("#deal-button").click(function(){
        // Dealer Cards
        var card1 = deck1.pop();
        dealerCards.push(card1);
        var card1Img = document.createElement("img");
        var card1Url = getCardImageUrl(card1);
        card1Img.setAttribute("src", card1Url);
        dealerHand.appendChild(card1Img);
        var card2 = deck1.pop();
        dealerCards.push(card2);
        var card2Img = document.createElement("img");
        var card2Url = getCardImageUrl(card2)
        card2Img.setAttribute("src", card2Url);
        dealerHand.appendChild(card2Img);
        // Player Cards
        var card3 = deck1.pop();
        playerCards.push(card3);
        var card3Img = document.createElement("img");
        var card3Url = getCardImageUrl(card3);
        card3Img.setAttribute("src", card3Url);
        playerHand.appendChild(card3Img);
        var card4 = deck1.pop();
        playerCards.push(card4);
        var card4Img = document.createElement("img");
        var card4Url = getCardImageUrl(card4);
        card4Img.setAttribute("src", card4Url);
        playerHand.appendChild(card4Img);
        // calculate points
        var points1 = calculatePoints(dealerCards);
        var points2 = calculatePoints(playerCards);
        var dealerPoints = document.getElementById('dealer-points');
        dealerPoints.textContent = points1;
        var playerPoints = document.getElementById('player-points');
        playerPoints.textContent = points2;

    })

    // var hit = document.getElementById('hit-button');
        $("#hit-button").click(function(){
            var hitCard = deck1.pop();
            playerCards.push(hitCard);
            var hitCardImg = document.createElement('img');
            var hitCardUrl = getCardImageUrl(hitCard);
            hitCardImg.setAttribute('src', hitCardUrl);
            playerHand.appendChild(hitCardImg);
            // calculate points again after hit
            var points1 = calculatePoints(dealerCards);
            var points2 = calculatePoints(playerCards);
            var dealerPoints = document.getElementById('dealer-points');
            dealerPoints.textContent = points1;
            var playerPoints = document.getElementById('player-points');
            playerPoints.textContent = points2;

            // determine if bust
            if(points1 > 21){
                alert("Dealer bust!");
            }
            if(points2 > 21){
                alert("Player bust!");
            }

        })
    
    // var stand = document.getElementById('stand-button');
    $("#stand-button").click(function(){
        var points1 = calculatePoints(dealerCards);
        
        while(points1 < 17){
            var standCard = deck1.pop();
            dealerCards.push(standCard);
            var standCardImg = document.createElement('img');
            var standCardUrl = getCardImageUrl(standCard);
            standCardImg.setAttribute('src', standCardUrl);
            dealerHand.appendChild(standCardImg);
            var points1 = calculatePoints(dealerCards);

        }
        
        gameEnd();
        
    })
    

    function gameEnd(){
        //calculate points after player stand
        var points1 = calculatePoints(dealerCards);
        var points2 = calculatePoints(playerCards);
        var dealerPoints = document.getElementById('dealer-points');
        dealerPoints.textContent = points1;
        var playerPoints = document.getElementById('player-points');
        playerPoints.textContent = points2;

        //Determine winner
        var message = document.getElementById('messages');
        if(points2 == points1){
            alert("Tie!")
            message.textContent = "It's a tie.";
        }
        else if(points2 > 21){
            alert("You lost.");
            message.textContent = "You lost.";
        }
        else if(points2 > points1 || points1 > 21){
            alert("You won!");
            message.textContent = "You won!";
        }
        else if(points1 > points2 && points1 <=21){
            alert("Dealer won.");
            message.textContent = "Dealer won.";
        }
        else{
            alert("You won!");
            message.textContent = "You won!";
        }
    }

    function calculatePoints(allCards){
        var totalPoints = 0;
        allCards.forEach(function(card){
            if(card.point == 11 || card.point == 12 || card.point == 13){
                totalPoints += 10;
            }
            else if(card.point == 1){
                totalPoints += 11;
            }
            else{
                totalPoints += card.point;
            }
        })
        return totalPoints;
    }



}
play();
