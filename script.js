const word_el = document.getElementById('word');

function getRandomWord() {

    const words = ["javascript", "java", "pyhton"];

    return words[Math.floor(Math.random() * words.length)];
}

function displayWord() {
    const selectedWord = getRandomWord();
    word_el.innerHTML=`
    ${selectedWord.split('').map(letter => `
      <div class="letter">
      
      </div>
    `)}

    `;

}