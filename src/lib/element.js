export const element = (tagName, props = {}, children = []) => {
  const node = tagName === "" ? document.createDocumentFragment() : document.createElement(tagName)
  attributes(node, props)
  content(node, children)
  return node
}

export const content = (node, children = []) => {
  node.innerHTML = ""
  if (Array.isArray(children)) {
    children.forEach((child) => {
      append(node, child)
    })
  } else {
    append(node, children)
  }
}

const append = (node, child) => {
  if (child instanceof Node) {
    node.appendChild(child)
  } else {
    node.innerHTML += child
  }
}

export const attributes = (node, props = {}) => {
  Object.entries(props).forEach(([key, value]) => {
    if (key.slice(0, 2) === "on") {
      const eventName = key.slice(2).toLowerCase()
      node.addEventListener(eventName, value)
    } else if (key.slice(0, 4) === "data") {
      const dataName = key.slice(4).toLowerCase()
      node.dataset[dataName] = value
    } else if (key === "className") {
      value.trim().split(" ").forEach((className) => {
        node.classList.add(className)
      })
    } else {
      node[key] = value
    }
  })
}
