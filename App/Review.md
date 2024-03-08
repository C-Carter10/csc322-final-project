console.log() // console.log() is a global object

{ //all JavaScript global objects as well
setTimeout() // calls function after a delay
clearTimeout() // cancels a timeout previously established by calling setTimeout()

setInterval() // repeatively call function after given delay
clearInterval() // same as clearTimeout() but for setInterval()
}

window // presents global scope, all vars and funcs defined globally accessed thru this object
window.console.log() // same as console.log(), window is already prefixed in system when called


global // in node object is not added to global
var message = ''; // not global in Node
console.log(global.message); // results in "undefined" when called in terminal