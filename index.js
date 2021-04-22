const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


// const titleCased = (tutorials) => {
//   return tutorials.map(tutorialName => {
//     const wordsArray = wordsArray.split(" ")
//     const capitalizedLetter = 
//       wordsArray.map(word => { 
//       word.replace(word[0], word[0].toUpperCase())
//     })
//     response = capitalizedLetter.join(" ")
//     return response
//   })
// }

const titleCased = (i) => {
  return tutorials.map(tutorialName => {
    const wordsArray = tutorialName.split(" ")
    const capitalizedWords = 
      wordsArray.map(word => word.replace(word[0], word[0].toUpperCase()))
    const response = capitalizedWords.join(' ')
    return response
  })
}

// const titleCased = (input) => {
//   return tutorials.map( line => {
//     const tokens = line.split(' ');
//     const capitalizedTokens =
//       tokens.map( token => token.replace(token[0], token[0].toUpperCase()))
//     const response = capitalizedTokens.join(' ');
//     return response;
//   });
// }

// const titleCased = (tutorials) => {
//   return tutorials.map(tutorialName => {
//    tutorialName.split(" ").map(word => { 
//       word.replace(word[0], word[0].toUpperCase())
//     }).join(" ")
//   })
// }