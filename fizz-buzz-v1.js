function fizzBuzz(n) {
    if (n <= 0)
        return;

    for (let i = 1; i <= n; i++) {
        if ((i % 3) === 0 && (i % 5) === 0) {
            console.log('FizzBuzz');
        } else if (i % 3 === 0){
            console.log('Fizz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else console.log(i);
    }
    
}

// fizzBuzz(15);
// fizzBuzz(0);
fizzBuzz(1000000);