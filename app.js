var increment = (function () {
    var n = 0;

    return function () {
        n += 1;

        return n;
    }
}());
console.log("Incremented value starting from 1:");
console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());
