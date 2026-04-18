const thephospalphabet = {
    'A': '|.-', 'B': '|.+', 'C': '|.|', 'D': '|..', 'E': '-.|',
    'F': '-.+', 'G': '-.-', 'H': '-..', 'I': '+.|', 'J': '+.-',
    'K': '+.+', 'L': '+..', 'M': '..|', 'N': '..-', 'O': '..+',
    'P': '...', 'Q': '||-', 'R': '||+', 'S': '||.', 'T': '--|',
    'U': '--+', 'V': '--.', 'W': '++|', 'X': '++-', 'Y': '++.',
    'Z': '+++', '1': '|1|', '2': '|2|', '3': '|3|', '4': '|4|',
    '5': '|5|', '6': '|6|', '7': '|7|', '8': '|8|', '9': '|9|',
    '0': '|0|', '.': '[.]'
};

const reverseDict = {};
for (let key in thephospalphabet) {
    reverseDict[thephospalphabet[key]] = key;
}

const englishinput = document.getElementById('englishinput');
const phosphorusinput = document.getElementById('phosphorusinput');
const encodebuton = document.getElementById('encodebuton');
const deencodebutton = document.getElementById('deencodebutton');
const clearbutton = document.getElementById('clearbutton');

function encode() {
    let text = englishinput.value.toUpperCase();
    
    let words = text.split(/\s+/);
    
    let translatedword = words.map(word => {
        let chars = word.split('');
        let translatedChars = chars.map(char => thephospalphabet[char] || char);
        return translatedChars.join(' ');
    });
    
    phosphorusinput.value = translatedword.join(' _ ');
}

function decode() {
    let text = phosphorusinput.value.trim();
    
    let words = text.split(/\s*_\s*/);
    
    let translatedword = words.map(word => {
        let blocks = word.split(' ');
        let englishChars = blocks.map(block => reverseDict[block] || block);
        return englishChars.join('');
    });
    
    englishinput.value = translatedword.join(' ');
}

encodebuton.addEventListener('click', encode);
deencodebutton.addEventListener('click', decode);

clearbutton.addEventListener('click', () => {
    englishinput.value = '';
    phosphorusinput.value = '';
});