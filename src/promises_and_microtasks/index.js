import { app } from "./elements.js"
import { state } from "./state.js"
import { content } from "../lib/element.js"

const bootstrap = () => {
  const root = document.getElementById("root")
  content(root, app(state))
}

window.addEventListener("load", bootstrap)
