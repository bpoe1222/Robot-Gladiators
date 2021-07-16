var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

 var fight = function(enemyName) {
    while(playerHealth > 0 && enemyHealth > 0) {
    var promptFight = window.prompt("Would you like to fight or skip this battle? Enter 'FIGHT' or 'SKIP' to choose.")
    //if the player chooses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
    // Alert players that they are starting the round
    window.alert("The fight has begun!");
    //Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
    var damage = randomNumber(playerAttack - 3, playerAttack);

    enemyHealth = Math.max(0, enemyHealth- damage);
    //Log a resulting message to the console so we know that it worked
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName +" now has " + enemyHealth + " health remaining."
    );
    //Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth variable'
    var damage = randomNumber(enemyAttack-3, enemyAttack);

    playerHealth = Math.max(0, playerHealth - damage)
    //Log a resulting message to the console so we know that it worked
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    )
    
    //check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!")
        break;
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.")
    }
    //check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
        break;
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.")
    }
    } if (promptFight === "skip" || promptFight === "SKIP") {
        //confirm player wants to quit
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        
        //if yes (true) leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            
            //subtract money from 'playerMoney' for skipping
            playerMoney = Math.max(0, playerMoney - 10);
            console.log("playerMoney", playerMoney);
            break;
        } else {
            fight();
        };
    } else {
        window.alert("That is not a valid option. Try again!")
    };
    };
 };
 var startGame = function() {
     playerHealth = 100;
     playerAttack = 10;
     playerMoney = 10;
 for(var i = 0; i < enemyNames.length; i++) {
     if (playerHealth > 0) {
         window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ) );
     }
     else {
         window.alert ("You have lost your robot in battle! Game Over!");
         break;
     }
    var pickedEnemyName = enemyNames[i];
    enemyHealth = Math.floor(Math.random() * 21) + 40;
    fight(pickedEnemyName);
 }
 endGame();
};
var endGame = function() {
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".")
    } else {
        window.alert("You've lost your robot in battle")
    }
    var playAgainConfirm = window.confirm("Would you like to play again?");
    if(playAgainConfirm) {
        startGame();
    } else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!")
    }

};
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1)) + 40;

    return value;
}
