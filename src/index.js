const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const letterSize = 10
    const binarySize = 2
    const resultArrNum = []
    const resultArrMorse = []
    let resultText = ''
    let morseLetter = ''
    const dot = 10
    const dashes = 11
    const space = '**********'


    for (let i = 0; i < expr.length; i+= letterSize) {
        resultArrNum.push(expr.slice(i, i + letterSize))
    }
    resultArrNum.map(el => {
        if (el == space) {
            resultArrMorse.push(' ')
        } else {
            for (let j = 0; j < el.length; j+= binarySize) {
                let pair = el.slice(j, j + binarySize)
                if(pair == dot){
                    morseLetter += '.'
                } else if (pair == dashes) {
                    morseLetter += '-'
                }
            }
            resultArrMorse.push(morseLetter)
            morseLetter = ''
        }
    })
    resultArrMorse.map( el => {
        if (el == ' '){
            resultText += ' '
        }
        for (const morsetableKey in MORSE_TABLE) {
            if (el == morsetableKey) {
                let letter = MORSE_TABLE[morsetableKey]
                resultText += letter
            }
        }
    })
    return resultText
}

module.exports = {
    decode
}