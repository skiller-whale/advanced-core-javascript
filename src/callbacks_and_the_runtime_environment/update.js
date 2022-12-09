import { attributes, element, content } from "../lib/element.js"
import state from "./state.js"
import * as elements from "./elements.js"

export default () => {
  content(
    elements.runnersDisplay,
    state.runners.map(({ name, timer }) => element("li", {}, `${name}: <span class="font-mono">${timer.timeDisplay()}s</span>`))
  )

  content(elements.timerDisplay, state.currentRunner.timer.timeDisplay())
}
