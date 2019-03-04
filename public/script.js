let userScore = 0;
let computerScore = 0;
const $userScore_span = $('#user-score');
const $computerScore_span = $('#computer-score');
const $scoreBoard_div = $('.score');
const $result_p = $('.result').find('p');
const $rock_div = $('#piedra');
const $paper_div = $('#papel');
const $scissors_div = $('#tijera');

function getComputerChoice() {
    const choice = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choice[randomNumber];
}

function win(user, computer) {
    $result_p.html(user + " gana a " + computer + ". Tu ganas!!!");
    userScore++;
    $userScore_span.html(userScore);
    $computerScore_span.html(computerScore);
    userChoice = $('#'+user.toLowerCase()); 
    userChoice.addClass('green-glow');
    setTimeout(function(){
        userChoice.removeClass('green-glow');
    },300);
}

function lose(user, computer) {
    $result_p.html(computer + " gana a " + user + ". Tu pierdes!!!");
    computerScore++;
    $userScore_span.html(userScore);
    $computerScore_span.html(computerScore);
    userChoice = $('#'+user.toLowerCase()); 
    userChoice.addClass('red-glow');
    setTimeout(function(){
        userChoice.removeClass('red-glow');
    },300);
}

function draw(userChoice) {
    $result_p.html("Empataron!!!");
    $userScore_span.html(userScore);
    $computerScore_span.html(computerScore);
    switch(userChoice){
        case 'r':
            user = "#piedra";
            break;
        case 'p':
            user = "#papel";
            break;
        case 's':
            user = "#tijera";
            break;
    }
    choice = $(user);
    choice.addClass('gray-glow');
    setTimeout(function(){
        choice.removeClass('gray-glow');
    },300);
}

function game(userChoice) {
    
    const computerChoice = getComputerChoice();

    if(userChoice == computerChoice){
        draw(userChoice);
    }else {
        switch(userChoice+computerChoice) {
            //Gana Usuario
            case 'rs':
                win("Piedra","Tijera",userChoice);
                break;
            case 'pr':
                win("Papel","Piedra",userChoice);
                break;
            case 'sp':
                win("Tijera","Papel",userChoice);
                break;
            //Gana la compu
            case 'ps':
                lose("Papel","Tijera",userChoice);
                break;
            case 'rp':
                lose("Piedra","Papel",userChoice);
                break;
            case 'sr':
                lose("Tijera","Piedra",userChoice);
                break;
        }
    }
    
}

function main() {

    $rock_div.on('click', function(){
        game("r");
    });
    
    $paper_div.on('click', function(){
        game("p");
    });
    
    $scissors_div.on('click', function(){
        game("s");
    });

}

main();