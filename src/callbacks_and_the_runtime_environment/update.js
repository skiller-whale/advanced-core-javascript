import { attributes, element, content } from "../lib/element.js"
import state from "./state.js"
import * as elements from "./elements.js"

export default () => {
  content(
    elements.runnersDisplay,
    state.runners.map(({ name, timer }) => element("li", {}, `${name}: ${timer.timeDisplay}s`))
  )

  content(
    elements.runnerSelect,
    state.runners.map(({ name }, index) => element("option", { value: index.toString() }, name))
  )

  attributes(elements.runnerSelect, { value: state.currentRunnerIndex })

  content(elements.timerDisplay, state.currentRunner.timer.timeDisplay)
}
