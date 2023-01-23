import { dummyFetch1 as fetch, cancellablePromise1 as cancellablePromise } from "./dummyFetch.js"
import { cancelAskAdaButton } from "./elements.js"
import { Status, Answer, state, setState } from "./state.js"

export const postRequest = async () => {
  setState("previousQuestions", [...state.previousQuestions, state.question])
  setState("answer", Answer.thinking)
  setState("status", Status.working)
  try {
    const response = await fetch(state.question)
    setState("status", Status.idle)
    setState("answer", response.body)
    setState("previousQuestions", [...state.previousQuestions, state.question])
  } catch (error) {
    setState("status", Status.error(error))
  }
}

export const cancellablePostRequest = async () => {
  setState("answer", Answer.thinking)
  setState("status", Status.working)
  const signal = {}
  cancelAskAdaButton.addEventListener("click", () => {
    signal.cancel()
  })
  try {
    const response = await cancellablePromise(fetch(state.question), signal)
    setState("status", Status.idle)
    setState("answer", response.body)
    setState("previousQuestions", [...state.previousQuestions, state.question])
  } catch (error) {
    if (error === "Promise cancelled by user") {
      setState("answer", Answer.aborted)
      setState("status", Status.idle)
    } else {
      setState("status", Status.error(error))
    }
  }
}
