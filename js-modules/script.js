import Timer from './Timer.js'
import btnConfig from './Btn-config.js'
import btnVariables from './Btn-variables.js'
const minutes = document.querySelector('#minutes')
const seconds = document.querySelector('#seconds')

function handlePlayClick() {
  btnConfig.playClickAction(btnVariables)
  minutes.disabled = true
  seconds.disabled = true
  Timer.start(handleResetClick)
}
btnVariables.play.addEventListener('click', handlePlayClick)

function handlePauseClick() {
  btnConfig.pauseClickAction(btnVariables)
  Timer.pause()
}
btnVariables.pause.addEventListener('click', handlePauseClick)

function handleResetClick() {
  btnConfig.resetClickAction(btnVariables)
  minutes.disabled = false
  seconds.disabled = false
  Timer.reset()
}
btnVariables.reset.addEventListener('click', handleResetClick)

function handleConfigClick() {
  btnConfig.configClickAction(btnVariables, Timer)
}
btnVariables.config.addEventListener('click', handleConfigClick)

function handleSoundOnClick() {
  btnConfig.soundClickOnAction(btnVariables)
}
btnVariables.soundOn.addEventListener('click', handleSoundOnClick)

function handleSoundOffClick() {
  btnConfig.soundClickOffAction(btnVariables)
}
btnVariables.soundOff.addEventListener('click', handleSoundOffClick)
//adicionar som de fundo
//adicionar alarme
//refatorar codigo
