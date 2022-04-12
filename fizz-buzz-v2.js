/**
 * Fizz Buzz function that outputs the value that is
 * multiple of the parameter
 * @param {*} n 
 * @param {*} multipleNumber 
 * @returns nothing
 */
function fizzBuzz(n, multipleNumber = []) {
    let i = 0;
    if (n <= 0)
        return;

    if (multipleNumber === [])
        return;

    while (i++ < n) {
        // console.log(i);
        multipleNumber.map((value, index, number) => {
            if (i % value === 0)
                console.log(`${i} is multiple of ${value}`);
        });
    }
}

fizzBuzz(15, [3, 5]);