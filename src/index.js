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
    let result = '';
    let words = expr.split('**********');

    for (let i = 0; i < words.length; i++) {
        let anotherWords = words[i].match(/.{10}/g);
        for (let j = 0; j < anotherWords.length; j++) {
            let mors = '';

            anotherWords[j].match(/.{2}/g).forEach(item => {
                if (item === '10') {
                    mors = mors + '.'
                } else if (item === '11') {
                    mors = mors + '-'
                }
            });

            for (let key in MORSE_TABLE) {
                if (key === mors) {
                    result = result + MORSE_TABLE[key]
                }
            }
        }

        if (words[i + 1]) {
            result = result + ' '
        }
    }

    return result;
}

module.exports = {
    decode
}