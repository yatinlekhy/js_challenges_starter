(function (){
 let total = 17
 let bills =[]
if(total>20){
    let numberOfTwenties = Math.floor(total/20)
    total = total % 20
    bills[0] = numberOfTwenties

} else {
    bills[0]=0
    }

    if(total>10){
        let numberOfTens = Math.floor(total/10)
        bills[1] =numberOfTens
        total=total % 10
    } else {
        bills[1]=0
    
    }
    if(total>5){
        let numberOfFive = Math.floor(total/5)
        total = total % 5
        bills[2] = numberOfFive
    } else {
        bills[2]=0
    }
    if(total>1){
        let numberOfOnes = Math.floor(total/1)
        total = total % 1
        bills[3] = numberOfOnes
    } else {
        bills[3]=0
    }

console.log(bills)
})

();

/*
if total is greater than 20, then divide total by 20 and set the first element of bills array
to the number of times 20 goes into total
if remainder is greater than 10, then divide the remainder by 10 and set the second element
of bills array tp the number of times 10 goes into the remainder
*/