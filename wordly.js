const url = "https://api.dictionaryapi.dev/api/v2/entries/en/hello";

let words = [];

const searchButton = document.querySelector(".search-btn");
const searchInput = document.querySelector(".search-input");
const wordDisplay = document.querySelector(".word-content");


searchButton.addEventListener("click", () => {
  const word = document.querySelector(".search-input").value;
  getData(word);
  searchInput.value = "";
});


async function getData(word){
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  try{
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)

    let myWord = {
      word: data[0].word,
      partOfSpeech: data[0].meanings[0].partOfSpeech,
      definition1: data[0].meanings[0].definitions[0].definition,
      audio: data[0].phonetics[0].audio
    }

    console.log(myWord);
    
    words.push(myWord);
    //console.log(words);

  }catch(error){
    console.log(error);
  }
  displayWord();
}

getData("hello");

function displayWord(){
  wordDisplay.innerHTML = "";
 let html = "";
 
  words.forEach(word => {
    html += `
    <div class="word-card">
      <h2>word:${word.word}</h2>
      <p>part of speech:${word.partOfSpeech}</p>
      <p>definition:${word.definition1}</p>
      <audio controls src="${word.audio}">audio</audio>
    </div>
    `
 });

 wordDisplay.innerHTML = html;
 
}



