
const pipe = document.querySelector('.pipe');
const mario = document.querySelector('.mario');
const nuvens = document.querySelector('.nuvens');
const pontos = document.querySelector('#pontos');
const gameOver = document.createElement('p');
const audio = document.querySelector('.musica');
gameOver.setAttribute('id','game-over');
const texto = document.createTextNode('Game Over');

let points = 0;

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
        points = ++points;
        pontos.innerHTML = points*10;
        if(points >100){
            pipe.style.animation = 'pipe-animation 2.s infinite linear'
        }
    }, 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.left = `${marioPosition}px`;

        mario.src = './imagens/game-over.png';
        mario.style.width='75px';
        mario.style.marginLeft='50px';
        mario.style.bottom='100px';

        nuvens.style.animation = 'none';
        points = 0-10;
        const body = document.body;
        body.appendChild(gameOver);
        gameOver.appendChild(texto);
        audio.setAttribute('src', './imagens/29 Game Over.mp3');
            
        clearInterval(loop);
    }
}, 10);

document.addEventListener('keydown', jump);



