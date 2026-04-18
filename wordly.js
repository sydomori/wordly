const url = "https://api.dictionaryapi.dev/api/v2/entries/en/hello";

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
    
    displayWord(myWord);

  }catch(error){
    console.log(error);
  }
  
}

getData("hello");

function displayWord(word){
 
  wordDisplay.innerHTML = `
    <div class="word-card">
      <h2>Word: ${word.word}</h2>
      <p>Part of speech: ${word.partOfSpeech}</p>
      <p>Definition: ${word.definition1}</p>
      ${
        word.audio 
        ? `<audio class="audio-player" controls src="${word.audio}"></audio>` 
        : ""
      }
    </div>
  `;
 
}



