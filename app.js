

function fibseq(arg) {
    let fib = [0, 1];
    for (let i = 2; i < arg; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[fib.length -1]
};

console.log(fibseq(100));

