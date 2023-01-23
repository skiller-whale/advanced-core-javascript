import PseudoPromise from "./PseudoPromise.js"
import askAda from "./askAda.js"

const chanceOfError = 0.1

export const dummyFetch1 = (question) => {
  const pseudoPromise = new PseudoPromise()
  const delay = Math.random() * 3000

  setTimeout(() => {
    if (Math.random() < chanceOfError) {
      pseudoPromise.reject("Network Error")
    } else {
      pseudoPromise.fulfil({ status: 200, ok: true, body: askAda(question) })
    }
  }, delay)

  return pseudoPromise
}

export const dummyFetch2 = (question) =>
  new Promise(async (resolve, reject) => {
    const delay = Math.random() * 3000

    setTimeout(() => {
      if (Math.random() <= chanceOfError) {
        reject("Network Error")
      } else {
        resolve({ status: 200, ok: true, body: askAda(question) })
      }
    }, delay)
  })

export const cancellablePromise1 = (promise, signal) => {}

export const cancellablePromise2 = (promise, signal) => {}
