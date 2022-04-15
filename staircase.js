function drawStairCase(size) {
    var i;

    for (i = 1; i <= size; i++) {
        let line = '';
        for (let j = size; j >= 1; j--) {
            if (j <= i)
                line += '#';
            else
                line += ' ';
        }
        console.log(line);
    }
}
drawStairCase(10);