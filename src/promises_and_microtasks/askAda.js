const answers = [
  "I don't understand.",
  "Forty-two.",
  "How could I possibly know that? I'm a whale.",
  "Interesting. I'll need a while to think about that - ask me again later.",
  "Yes.",
  "No.",
  "That would be an ecumenical matter.",
  "You tell me.",
  "That's offensive, please rephrase your question.",
]

export default (question) => {
  const answerIndex = Math.floor(Math.random() * answers.length)
  return answers[answerIndex]
}
