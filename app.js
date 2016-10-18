var counter = 0;
function increment() {
    return counter += 1;
}
function counters(){
    console.log(increment());
	console.log(increment());
	console.log(increment());
	console.log(increment());
}
console.log("Incremented value starting from 1:");
counters();
