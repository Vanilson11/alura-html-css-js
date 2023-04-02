//utiliza-se a nomeclatura "main" para indicar o arquivo principal em JS da aplicação
function playSong(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
const listaDeTeclas = document.querySelectorAll('.tecla');

for(let c = 0; c < listaDeTeclas.length; c++){
    const instrumento = listaDeTeclas[c].classList[1]
    const idAudio = `#som_${instrumento}`
    listaDeTeclas[c].onclick = function (){
        playSong(idAudio)
    };
    
}