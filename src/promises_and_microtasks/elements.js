import { element } from "../lib/element.js"
import { setState } from "./state.js"
import { postRequest, cancellablePostRequest } from "./postRequest.js"

const buttonClasses = (colour) =>
  `py-2 px-3 bg-${colour}-600 hover:bg-${colour}-800 text-white w-32`

export const questionInput = element("input", {
  type: "text",
  className: "flex-1",
  onChange: (event) => {
    setState("question", event.currentTarget.value)
  },
})

export const askAdaButton = element(
  "button",
  { className: buttonClasses("green"), onClick: postRequest },
  "Ask Ada"
)

export const cancelAskAdaButton = element("button", { className: buttonClasses("red") }, "abort!!!")

export const statusDisplay = element(
  "div",
  { className: "border-l border-r border-b border-gray-600 bg-gray-200 px-3 py-1 text-sm" },
  "ask me anything"
)

export const answerDisplay = element(
  "div",
  { className: "border border-gray-600 p-3 flex flex-col gap-2" },
  "Ask me anything!"
)

export const app = () =>
  element("div", { className: "flex flex-col gap-3" }, [
    element("h1", { className: "font-semibold text-2xl" }, "Ask Ada"),
    element("div", { className: "flex gap-3" }, [questionInput, cancelAskAdaButton, askAdaButton]),
    element("div", {}, [answerDisplay, statusDisplay]),
  ])
