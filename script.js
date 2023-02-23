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

    //Listener for 'arcaneScepter' button
    $('.arcane-sceptre').on('click', arcaneScepter)

    //Listener for 'entangle' button
    $('.entangle').on('click', entangle)

    //Listener for 'dragon-blade' button
    $('.dragon-blade').on('click', dragonBlade)

    //Listener for 'star-fire' button
    $('.star-fire').on('click', starFire)

    render()
}
//function to attack, which will decrease attackPoints 
//variable and fungusHP variable.

//If freaky fungus hp reaches 0, replace walk class with dead class on fungus.

//if attack points hp reaches 0, replace walk class with jump class on fungus.

//if attack points reaches 0, give all attack buttons a disabled attribute.


function render() {
    $('.ap-text').html(attackPoints + ' ' + 'AP')
    $('.hp-text').html(fungusHP + ' ' + 'HP')
}

function arcaneScepter() {
    console.log('Arcane scepter attack!')
}

function entangle() {
    console.log('Entangle attack!')
}

function dragonBlade() {
    console.log('Dragon Blade attack!')
}

function starFire() {
    console.log('Star Fire attack!')
}