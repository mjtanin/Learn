

window.addEventListener('keydown', (e) => {
    var audio = document.getElementById(`${e.keyCode}`)
    var key = document.querySelector(`[data-key="${e.keyCode}"]`)
    if(!audio) return
    audio.currentTime = 0
    audio.play()
    key.classList.add('active')

    const keys = document.querySelectorAll('.key') 

    function removeTransition(e){
        this.classList.remove('active')
    }

    keys.forEach(key => {
        key.addEventListener('transitionend', removeTransition)
        
    })
 
})