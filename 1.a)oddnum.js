function* numbers(start, end) {
    let i = start%2 ? start : ++start;
    while(i <= end) {
        yield i;
        i += 2
    }
}

console.log([...numbers(2, 10)])