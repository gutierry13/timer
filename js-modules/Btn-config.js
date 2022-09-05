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
  playClickAction(btnVariables) {
    this.addClass(btnVariables.play, 'hide')
    this.removeClass(btnVariables.pause, 'hide')
    this.addClass(btnVariables.config, 'hide')
    this.removeClass(btnVariables.reset, 'hide')
  },
  pauseClickAction(btnVariables) {
    this.removeClass(btnVariables.play, 'hide')
    this.addClass(btnVariables.pause, 'hide')
  },
  configClickAction(btnVariables, timer) {
    this.toggleClass(btnVariables.config, 'rotate')
    this.toggleClass(timer.timerVar, 'active')
  },
  resetClickAction(btnVariables) {
    this.removeClass(btnVariables.config, 'hide')
    this.addClass(btnVariables.reset, 'hide')
    this.removeClass(btnVariables.play, 'hide')
    this.addClass(btnVariables.pause, 'hide')
  },
  soundClickOnAction(btnVariables) {
    this.removeClass(btnVariables.soundOff, 'hide')
    this.addClass(btnVariables.soundOn, 'hide')
  },
  soundClickOffAction(btnVariables) {
    this.addClass(btnVariables.soundOff, 'hide')
    this.removeClass(btnVariables.soundOn, 'hide')
  }
}
export default btnConfig
