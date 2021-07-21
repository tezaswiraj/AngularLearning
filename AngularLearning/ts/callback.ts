function divide(a:number, b:number, callback) {
    if(b == 0) {
        throw console.error(`Divide by zero error: ${a} / ${b}`);
    }
    else {
        var quotient = ~~(a/b)
        var remainder = a % b
        callback(quotient,remainder)
    }
    
}

function printresult (quotient,remainder) {
    console.log(`quotient of the division is: ${quotient}
remainder of the division is: ${remainder}`)
}

divide(15,6,printresult)
