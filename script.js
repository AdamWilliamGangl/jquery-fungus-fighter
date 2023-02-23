$(document).ready(onReady);
let fungusHP = 100;
let attackPoints = 100;
// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

function onReady() {
    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
    render()
}
function render(){
    $('.ap-text').html(attackPoints + ' ' + 'Points')
    $('.hp-text').html(fungusHP + ' ' + 'Points')
}