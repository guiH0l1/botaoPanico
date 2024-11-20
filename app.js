/**
 * Ao apertar o botão dispara o botão de alerta
 * @author Guilherme Holi
 */

let som = new Audio('sound/samsung-estourado.mp3')
const botao = document.getElementById('botao')

//CLIQUE DE COMPUTADOR
botao.addEventListener('mousedown', (event) => {
    event.preventDefault()
        som.play()
}
)

botao.addEventListener('mouseup', (event) => {
    event.preventDefault()
    som.pause()
}
)

//TOUCH DE CELULAR
botao.addEventListener('touchstart', (event) => {
    event.preventDefault()
        som.play()
    }
)

botao.addEventListener('touchend', (event) => {
    event.preventDefault()
    som.pause()
}
)