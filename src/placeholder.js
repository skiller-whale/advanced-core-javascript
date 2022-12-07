import { content, element } from "./lib/element.js"

const root = document.getElementById("root")
content(root, element("div", { className: "p-3 bg-green-300 text-green-800 border border-green-800" }, "Whale hello there! It looks like you're all set up."))
