
function shout(string) {
    return string.toUpperCase();
}
shout(string);

function whisper(string) {
    return string.toLowerCase();
}

whisper(string);

function logShout(string) {
    console.log(string.toUpperCase());
}
logShout(string);

function logWhisper(string) {
    console.log(string.toLowerCase());
}
logWhisper(string);

/*
const string = "Hello!";

console.log(string);
console.log(string.toUpperCase());

string === string.toUpperCase
*/
const string = "hello"

function sayHiToHeadphonedRoommate(string) {
    if (string.toLowerCase()=== string) {
        return ("I can\'t hear you!")
    } 
    else if (string.toUpperCase() === string) {
        return ("YES INDEED!")
    }
    else if (string === "Let\'s have dinner together!") {
        return ("I would love to!")
    }
}

sayHiToHeadphonedRoommate("i\'m lower case")
sayHiToHeadphonedRoommate("I\'M UPPER CASE")
sayHiToHeadphonedRoommate("Let\'s have dinner together!")