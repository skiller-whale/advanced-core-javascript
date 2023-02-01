export default class PseudoPromise {
  #state = "Pending"
  #result
  #onFulfilled
  #onRejected
  #onFinally
  #nextPromiseInChain

  toString() {
    return this.#state === "Pending" ? "<Pending>" : `<${this.#state}> ${this.#result}`
  }

  then(onFulfilled, onRejected) {
    // ...
  }

  catch(onRejected) {
    return this.then(undefined, onRejected)
  }

  finally(onFinally) {
    // ...
  }

  fulfil(result) {
    this.#state = "Fulfilled"
    this.#result = result

    if (this.#onFulfilled && this.#nextPromiseInChain) {
      // ...
    } else if (this.#onFulfilled) {
      // ...
    } else if (this.#nextPromiseInChain) {
      // ...
    }

    if (this.#onFinally) {
      this.#onFinally()
    }
  }

  reject(result) {
    this.#state = "Rejected"
    this.#result = result

    if (this.#onRejected && this.#nextPromiseInChain) {
      // ...
    } else if (this.#onRejected) {
      // ...
    } else if (this.#nextPromiseInChain) {
      // ...
    }

    if (this.#onFinally) {
      this.#onFinally()
    }
  }
}
