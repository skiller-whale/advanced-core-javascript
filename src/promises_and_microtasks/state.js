import { content } from "../lib/element.js"
import { questionInput, answerDisplay, statusDisplay } from "./elements.js"

export const Status = {
  idle: "ask me anything",
  working: "asking",
  error: (error) => `error: ${error}`,
}

export const Answer = {
  initial: "What would you like to know?",
  aborted: "Okay, I'll ignore that question. What else would you like to know?",
  thinking: "...",
}

export const state = {
  question: "",
  answer: Answer.initial,
  status: Status.idle,
}

export const setState = (property, value) => {
  state[property] = value

  switch (property) {
    case "question":
      questionInput.value = value
      break
    case "answer":
      content(answerDisplay, value)
      break
    case "status":
      content(statusDisplay, value)
      break
  }
}
