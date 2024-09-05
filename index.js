for (var i=0; i<7; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        var clique = this.innerHTML;
        interacaoUsuario(clique);
    });
}


document.addEventListener("keypress", function(event){
        interacaoUsuario(event.key);
});

function interacaoUsuario(key){
        switch(key){
            case "w":
                var musicaW = new Audio('sounds/crash.mp3');
                musicaW.play();
            break;  
            case "a":
                var musicaA = new Audio('sounds/tom-4.mp3');
                musicaA.play();  
            break;
            case "s":
                var musicaS = new Audio('sounds/kick-bass.mp3');
                musicaS.play();
            break;
            case "d":
                var musicaD = new Audio('sounds/tom-3.mp3');
                musicaD.play();
            break;
            case "j":
                var musicaJ = new Audio('sounds/snare.mp3');
                musicaJ.play();
            break;
            case"k":
                var musicaK = new Audio('sounds/tom-2.mp3');
                musicaK.play();
            break;
            case "l":
                var musicaL = new Audio('sounds/tom-1.mp3');
                musicaL.play();
            break;
            default: console.log(x);
        }
}

setTimeout (function(){

});


