    //Create and assign a varibale to a function that creates a random number.
    let randomNum = function getRandomNum (min,max) {
        return Math.floor(Math.random() * (max-min +1)) + min;
    }

    //Declare and store randomly gen crystal value in an array. Each value must be between 1 and 12.
    var crystalValue = [randomNum(1,12),randomNum(1,12),randomNum(1,12),randomNum(1,12)];;
    
    //Create and set player's score as zero at start.
    var playerScore = 0;

    //Create a target number and assign a randomly generated value between 19 and 120.
    var target = Math.floor(Math.random() * (120-19 +1)) + 19;

    //Display the target value to player
    $("#targetNum").html(target);

    // reset everything
    $("#reset").on("click", reset);

    // Creating variables to hold the number of wins, losses. They start at 0.
    var wins = 0;
    var losses = 0;
    var gameOver = false;

    // Create variables that hold references to the places in the HTML where we want to display things.
    var computerChoiceText = document.getElementById("compchoice-text");
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var userChoiceText = document.getElementById("userchoice-text");

    // Reset crystal random numbers, reset player score, reset target (computer random number).
    function reset() {
        gameOver = false;
        target = Math.floor(Math.random() * (120-19 +1)) + 19;
        $("#targetNum").html(target);
        playerScore = 0;
        $("#playerNum").html(playerScore);
        crystalValue = [randomNum(1,12),randomNum(1,12),randomNum(1,12),randomNum(1,12)];
      }
    

    //Select crystal to add on click function
    $("#crystalone").click(function(){
        if (gameOver) {
            return;
        }
        playerScore += crystalValue[0];

    //Display the added value to player's score
    $("#playerNum").html(playerScore);

    //Check if the player's score matches or exceeds.
    //if exceeds alert user that you lost and add plus 1 to the losses counter.
    //else if the player's score matches the target number alert that you win and add plus 1 to the win counter.
    //Reset game
    //Duplicate the above four codes to assign to next crystal

        if (playerScore > target) {
            // alert("You Lost!");
            losses++;
            $("#losses-text").html(losses);
            gameOver = true;
            // reset()
        } else if (playerScore == target) {
            // alert("You Won!");
            wins++;
            $("#wins-text").html(wins);
            gameOver = true;
            // reset()
        }
    });

    $("#crystaltwo").click(function(){
        if (gameOver) {
            return;
        }
        playerScore += crystalValue[1];

    $("#playerNum").html(playerScore);
        
        if (playerScore > target) {
            // alert("You Lost!");
            losses++;
            $("#losses-text").html(losses);
            gameOver = true;
            // reset()
        } else if (playerScore == target) {
            // alert("You Won!");
            wins++;
            $("#wins-text").html(wins);
            gameOver = true;
            // reset()
        }
    });

    $("#crystalthree").click(function(){
        if (gameOver) {
            return;
        }
        playerScore += crystalValue[2];

        $("#playerNum").html(playerScore);;
        
        if (playerScore > target) {
            // alert("You Lost!");
            losses++;
            $("#losses-text").html(losses);
            gameOver = true;
            // reset()
        } else if (playerScore == target) {
            // alert("You Won!");
            wins++;
            $("#wins-text").html(wins);
            gameOver = true;
            // reset()
        }
    });

    $("#crystalfour").click(function(){
        if (gameOver) {
            return;
        }
        playerScore += crystalValue[3];

    $("#playerNum").html(playerScore);
        
        if (playerScore > target) {
            // alert("You Lost!");
            losses++;
            $("#losses-text").html(losses);
            gameOver = true;
            // reset()
        } else if (playerScore == target) {
            // alert("You Won!");
            wins++;
            $("#wins-text").html(wins);
            gameOver = true;
            // reset()
        }
    });