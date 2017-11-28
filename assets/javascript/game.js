var random_result;
var losses = 0;
var wins = 0;
var score = 0;

$(".crystal").attr('class', 'purple');

var resetAndStart = function () {

};

$(".crystal-container").empty();

random_result = Math.floor(Math.random() * 69) + 30;

$("#result").html("Random Result: " + random_result);

for (var i = 0; i < 4; i++) {

    var random = Math.floor(Math.random() * 11) + 1;

    console.log(random);

    var crystal = $("<div>");
    crystal.attr({
        "class": "crystal",
        "data-random": random
    });

    // crystal.html(random);

    $(".crystal-container").append(crystal);

    $("#score").html("Crystal Score: " + score);
    $("#wins").html("Wins: " + wins);
    $("#losses").html("Losses: " + losses);

}


$(document).on('click', ".crystal", function () {
    console.log($(this).attr('data-random'));
    // change the score with each click
    score = score + parseInt($(this).attr('data-random'));
    // change html to show new score
    $("#score").html("Crystal Score: " + score);

// use score to track wins and losses
// YOU WIN is if score is equal to random result

    if (score === random_result) {
        wins = wins + 1;
        $("#wins").html("YOU WIN <br> Wins: " + wins);
        score = 0;
        $("#score").html("Crystal Score: " + score);

    }

// YOU loose if score is higher than random result

    if (score > random_result) {
        losses = losses + 1;
        $("#losses").html("YOU LOSE <br> losses: " + losses);
        score = 0;
        $("#score").html("Crystal Score: " + score);
    }

});



