import { element } from "../lib/element.js"
import state from "./state.js"

const containerClasses = (vertical) => (vertical ? "flex flex-col gap-3" : "flex gap-3")
const buttonClasses = (colour) => `py-2 px-3 bg-${colour}-600 hover:bg-${colour}-800 text-white`
const listClasses = "list list-disc ml-6"

export const runnersDisplay = element(
  "ul",
  { className: listClasses },
  state.runners.map((runner) => element("li", {}, `${runner.name}: <span class="font-mono">${runner.timer.timeDisplay()}</span>`))
)

export const runnerSelect = element(
  "select",
  {
    className: "w-52",
    onChange: (event) => {
      state.currentRunnerIndex = parseInt(event.currentTarget.value)
    },
  },
  state.runners.map(({ name }, index) => element("option", { value: index.toString() }, name))
)

export const timerDisplay = element("p", { className: "font-mono py-2" }, "00:00")

export const startButton = element("button", { className: buttonClasses("blue") }, "Start")

export const stopButton = element("button", { className: buttonClasses("blue") }, "Stop")

export const resetButton = element("button", { className: buttonClasses("blue") }, "Reset")

export const buttonOfDoom = element("button", { className: buttonClasses("red") }, "Button of Doom")

export const app = element("div", { className: containerClasses(true) }, [
  element("h1", { className: "text-xl font-semibold" }, "Runner Timer"),
  element("div", { className: `${containerClasses()} justify-between` }, [
    runnersDisplay,
    element("div", { className: containerClasses(true) }, [
      element("div", { className: containerClasses() }, [
        element("label", { className: "py-2" }, "Select Runner:"),
        runnerSelect,
      ]),
      element("div", { className: `${containerClasses()} justify-end` }, [
        timerDisplay,
        startButton,
        stopButton,
        resetButton,
      ]),
      element("div", { className: `${containerClasses()} justify-end` }, [buttonOfDoom]),
    ]),
  ]),
])
