function validateDials (inputDials) {
  const dials = [
    'one',
    'two',
    'who',
    'bob',
    'add',
    'owl',
    'fab',
    'den',
    'mia',
    'tat'
  ]

  let output = ''

  for (let i = 0; i < inputDials.length; i++) {
    for (let j = 0; j < dials.length; j++) {
      if (
        inputDials[0] !== dials[j][0] ||
        inputDials[1] !== dials[j][1] ||
        inputDials[2] !== dials[j][2]
      ) {
        output = inputDials
      } else {
        return true
      }
    }
  }

  return output
}

console.log(validateDials('hat'))
