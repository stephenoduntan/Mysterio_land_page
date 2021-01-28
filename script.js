let name = "Man of Mysteries";
let letters = name.split("")
let elem = document.querySelector('#name');
let timer;

function disName(){
    if(letters.length > 0){
        elem.textContent += letters.shift()
    } else {
        clearTimeout(timer);
        return false;
    }
    timer = setTimeout('disName()', 150)
}

disName();

$('#info').fadeIn(5000);

let heart = $('svg');

setInterval(function(){
    heart.toggleClass('scale-110')
}, 800)
heart.css('transition', 'all .4s')
