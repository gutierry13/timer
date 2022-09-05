const minutes = document.querySelector('#minutes')
const seconds = document.querySelector('#seconds')

const Timer = {
  timerVar: document.querySelector('#timer'),
  secondsTimer: undefined,
  start(handleReset) {
    if (this.timerVar.classList.contains('active')) {
      this.secondsTimer = setInterval(() => {
        if (seconds.value > 0) {
          seconds.value--
        } else if (minutes.value == 0 && seconds.value == 0) {
          handleReset()
          return
        } else {
          seconds.value = 59
        }

        //contador
        seconds.value = String(seconds.value).padStart(2, '0')
        seconds.innerText = seconds.value

        //minutes
        seconds.value == 59 ? minutes.value-- : undefined
        minutes.value = String(minutes.value).padStart(2, '0')
        minutes.innerText = minutes.value
      }, 1000)
    } else {
      this.secondsTimer = setInterval(() => {
        if (seconds.value < 60) {
          seconds.value++
        } else {
          seconds.value = String(0).padStart(2, '0')
        }
        //contador
        seconds.value = String(seconds.value).padStart(2, '0')
        seconds.innerText = seconds.value
        //minutos
        seconds.value == 60 ? minutes.value++ : undefined
        minutes.value = String(minutes.value).padStart(2, '0')
        minutes.innerText = minutes.value
        // arrumar 00
        seconds.value == '60'
          ? (seconds.value = String(0).padStart(2, '0'))
          : undefined
      }, 1000)
    }
  },
  pause() {
    clearInterval(this.secondsTimer)
  },
  reset() {
    seconds.value = String(0).padStart(2, '0')
    minutes.value = String(0).padStart(2, '0')
    this.pause()
  }
}
export default Timer
