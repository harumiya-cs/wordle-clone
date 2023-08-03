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
  await fetch(wordbank)
  .then((response) => response.text()).then((result) => {
    const wordsArray = result.split("\n")
    wordSet = new Set(wordsArray)
  })

  return { wordSet }
}