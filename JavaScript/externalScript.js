function clickmefunc() {
    console.log("clickmefunc");
}
document.getElementById("eventlistener").addEventListener("click",function () {
    console.log("called");
})
function addition(a,c) {
    console.log("called");
    return a+c
}
console.log(addition(50,90));
console.log(addition(50,80));
console.log(addition(50,470));
console.log(addition(50,60));
console.log(addition(50,170));
