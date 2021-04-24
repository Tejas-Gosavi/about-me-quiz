var readlineSync = require('readline-sync');
var chalk = require('chalk')
var highScorer = {
  'Name': 'Tejas',
  'Score': 5,
}

console.log('\n\n')
console.log("About me Quiz")
console.log('Do you know me/Tejas well, come lets find out!!!')
console.log('\n')

var question1 = 
{
    'Question': 'People call me at home by which name? ',
    'Hint': 'Starts with letter `S` ',
    'Answer': 'Sonu',
}
var question2 = 
{
    'Question': 'My hobby is? ',
    'Hint': 'I upload videos of it on Instagram ',
    'Answer': 'Beatbox',
}
var question3 = 
{
    'Question': 'In beatboxing my stage name is? ',
    'Hint': 'Short form of Tyrannosaurus rex',
    'Answer': 'Trex',
}
var question4 = 
{
    'Question': 'My favourite hero is? ',
    'Hint': 'He played Eddie brock in Venom and Bane in Dark Knight Rises',
    'Answer': 'Tom Hardy',
}
var question5 = 
{
    'Question': 'My favourite comics is? ',
    'Hint': 'May the force be with you!!!',
    'Answer': 'Star Wars',
}

var questions = [question1, question2, question3, question4, question5];
var score = 0

for (i = 0; i < questions.length; i++)
{
    var currentQuestion = questions[i];
    console.log((i+1) + ". " + currentQuestion.Question);
    console.log('Hint: ' + currentQuestion.Hint)
    var userAnswer = readlineSync.question('Answer: ');
    if (currentQuestion.Answer.toUpperCase() === userAnswer.toUpperCase())
    {
        console.log(chalk.greenBright.bold('Right answer!!! '));
        score++;
    }
    else
    {
        console.log(chalk.redBright.bold('Wrong answer!!! '));
        console.log('Right answer is ' + chalk.underline(currentQuestion.Answer));
    }
    console.log("\n")
}

console.log('Your final score: ' + score + '/5')
if (score == highScorer.Score)
{
    console.log('Great, You know me well.')
    console.log('You are now current Highscorer. ')
}
else
{
    console.log('You failed to set new highscore. ')
    console.log('Current Highscorer is ', highScorer.Name)
}