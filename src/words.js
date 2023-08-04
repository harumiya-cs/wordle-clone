import wordbank from './wordle-bank.txt'

export const defaultBoard = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
]


export const generateWordSet = async () => {
  let wordSet
  let todaysWord
  await fetch(wordbank)
  .then((response) => response.text()).then((result) => {
    const wordsArray = result.split("\n")
    todaysWord = wordsArray[Math.floor(Math.random() * wordsArray.length)]
    wordSet = new Set(wordsArray)
  })

  return { wordSet, todaysWord }
}