export default class Timer {
  #milliseconds = 0
  #intervalId = 0
  #startTime = 0

  get milliseconds() {
    return this.#milliseconds
  }

  delay() {
    return Date.now() - (this.#milliseconds + this.#startTime)
  }

  timeDisplay() {
    const seconds = Math.floor(this.#milliseconds / 1000)
      .toString()
      .padStart(2, "0")
    const tens = ((this.#milliseconds / 10) % 100).toString().padStart(2, "0")
    return `${seconds}:${tens}`
  }

  start() {
    this.#startTime = Date.now()
    // implement this method
  }

  stop() {
    // implement this method
  }

  reset() {
    this.#milliseconds = 0
  }

  doSomethingSlow() {
    const until = Date.now() + 3000
    while (Date.now() < until) {}
  }
}

// expose a Timer instance globally for testing (don't do this in production!)
window.timer = new Timer()
