const timerVar = document.querySelector('#timer')
const btnVariables = {
  play: document.querySelector('.play'),
  pause: document.querySelector('.pause'),
  reset: document.querySelector('.reset'),
  config: document.querySelector('.config'),
  soundOn: document.querySelector('.sound-on'),
  soundOff: document.querySelector('.sound-off')
}
const btnConfig = {
  addClass(element, aClass) {
    element.classList.add(aClass)
  },
  removeClass(element, aClass) {
    element.classList.remove(aClass)
  },
  toggleClass(element, aClass) {
    element.classList.toggle(aClass)
  },
  playClickAction() {
    this.addClass(btnVariables.play, 'hide')
    this.removeClass(btnVariables.pause, 'hide')
    this.addClass(btnVariables.config, 'hide')
    this.removeClass(btnVariables.reset, 'hide')
  },
  pauseClickAction() {
    this.removeClass(btnVariables.play, 'hide')
    this.addClass(btnVariables.pause, 'hide')
  },
  configClickAction() {
    this.toggleClass(btnVariables.config, 'rotate')
    this.toggleClass(timerVar, 'active')
  },
  resetClickAction() {
    this.removeClass(btnVariables.config, 'hide')
    this.addClass(btnVariables.reset, 'hide')
    this.removeClass(btnVariables.play, 'hide')
    this.addClass(btnVariables.pause, 'hide')
  },
  soundClickOnAction() {
    this.removeClass(btnVariables.soundOff, 'hide')
    this.addClass(btnVariables.soundOn, 'hide')
  },
  soundClickOffAction() {
    this.addClass(btnVariables.soundOff, 'hide')
    this.removeClass(btnVariables.soundOn, 'hide')
  }
}
const minutes = document.querySelector('#minutes')
const seconds = document.querySelector('#seconds')
const Timer = {
  start() {
    if (timerVar.classList.contains('active')) {
      secondsTimer = setInterval(() => {
        if (seconds.value > 00) {
          seconds.value--
        } else if ((minutes.value == 0) & (seconds.value == 0)) {
          handleResetClick()
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
      secondsTimer = setInterval(() => {
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
    clearInterval(secondsTimer)
  },
  reset() {
    seconds.value = String(0).padStart(2, '0')
    minutes.value = String(0).padStart(2, '0')
    this.pause()
  }
}

function handlePlayClick() {
  btnConfig.playClickAction()
  minutes.disabled = true
  seconds.disabled = true
  Timer.start()
}
btnVariables.play.addEventListener('click', handlePlayClick)

function handlePauseClick() {
  btnConfig.pauseClickAction()
  Timer.pause()
}
btnVariables.pause.addEventListener('click', handlePauseClick)

function handleResetClick() {
  btnConfig.resetClickAction()
  minutes.disabled = false
  seconds.disabled = false
  Timer.reset()
}
btnVariables.reset.addEventListener('click', handleResetClick)

function handleConfigClick() {
  btnConfig.configClickAction()
}
btnVariables.config.addEventListener('click', handleConfigClick)

function handleSoundOnClick() {
  btnConfig.soundClickOnAction()
}
btnVariables.soundOn.addEventListener('click', handleSoundOnClick)

function handleSoundOffClick() {
  btnConfig.soundClickOffAction()
}
btnVariables.soundOff.addEventListener('click', handleSoundOffClick)
//adicionar som de fundo
//adicionar alarme
//refatorar codigo
