//utiliza-se a nomeclatura "main" para indicar o arquivo principal em JS da aplicação
function playSong(seletorAudio){
    const elemento = document.querySelector(seletorAudio);
    
    if(elemento != null && elemento.localName === 'audio'){
        elemento.play();
    } else{
        console.log('Elemento não encontrado ou seletor inválido.')
    }
}
const listaDeTeclas = document.querySelectorAll('.tecla');

for(let c = 0; c < listaDeTeclas.length; c++){
    let tecla = listaDeTeclas[c]
    const instrumento = listaDeTeclas[c].classList[1]
    const idAudio = `#som_${instrumento}`
    listaDeTeclas[c].onclick = function (){
        playSong(idAudio);
    }

    tecla.onkeydown = function(evento){
        if(evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
        
    }
    
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa')
    }
}