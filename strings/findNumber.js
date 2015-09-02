'option explicit';
var randomWord = "1a";
if (randomWord.match("\\d+(\\.\\d+)*")) {
    console.log("It's a number!");
} else  {
    console.log("It's not a number!");
};
