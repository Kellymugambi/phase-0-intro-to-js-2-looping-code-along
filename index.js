// Code your solutions in this file
function writeCards(guys, message){
    let messages = []
    for (const guy of guys) {
        messages.push (`Thank you, ${guy}, for the wonderful ${message} gift!`)
    }
    return messages
}
function countDown (y){
    for(let i =y; i>=0; i--){
        console.log(i)
    }
}