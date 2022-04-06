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

// const titleCased = () => {
//   let tutorials2 = tutorials.map(function (isTitleCased) {
//     let eachWord = isTitleCased.split(' ')
//     let newTitle = ""
//     for(let word of eachWord){
//       word = `${word.charAt(0).toUpperCase()}${word.slice(1,word.length)}`
//       newTitle= `${newTitle}${word} `
//       console.log(newTitle)          
//     }
//     newTitle = newTitle.slice(0,newTitle.length-1)
//     return newTitle
//   })
//   return tutorials2
// }

const titleCased = () => {
  let tutorials2 = tutorials.map(function (isTitleCased) {
    let eachWord = isTitleCased.split(' ')
    return eachWord.map((word)=>word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    }
  )
  return tutorials2
}
