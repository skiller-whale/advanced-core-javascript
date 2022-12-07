import Timer from "./timer.js"

export default {
  runners: [
    { name: "Ada", timer: new Timer() },
    { name: "George", timer: new Timer() },
    { name: "Ringo", timer: new Timer() },
    { name: "Paul", timer: new Timer() },
    { name: "John", timer: new Timer() },
  ],
  currentRunnerIndex: 0,
  get currentRunner() {
    return this.runners[this.currentRunnerIndex]
  },
  newRunnerName: "",
}
