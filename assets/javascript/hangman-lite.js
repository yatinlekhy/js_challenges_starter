(function(){
let word="gangffgg"
let letter = 'g'

// let letterCount = (word.match(new RegExp(letter, "g")) || []).length
let letterCount = word.split(letter).length -1
console.log(word)
console.log(word.split(letter))
console.log(letterCount)

if(word.indexOf(letter)>=0){
    document.write('Yeah, the letter ' + letter + ' exists '+letterCount+  ' times in my word')
} else {
    document.write("Nope, that letter doesn't exist in my word")
}

// let someArray = [1,2,3,4,5]

// for(let i=0; i < someArray.length; i++){
    // console.log(someArray[i] = "hello")
}

   // document.write("hello from hangman-lite.js");

)();