import { app, startButton, stopButton, resetButton, buttonOfDoom } from "./elements.js"
import state from "./state.js"
import update from "./update.js"

const bootstrap = () => {
  const root = document.getElementById("root")
  root.appendChild(app)
}
