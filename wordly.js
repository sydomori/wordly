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
    
    /*
    let myWord = {
      word: data[0].word,
      partOfSpeech: data[0].meanings[0].partOfSpeech,
      definition1: data[0].meanings[0].definitions[0].definition,
      synonyms: data[0].meanings[0].synonyms || [],
      audio: data[0].phonetics[0].audio
    }
    */

    if(!response.ok){
      displayError(data.message);
      return;
    }
    
    displayWord(data);

  }catch(error){
    displayError("Word not found, please try again");
  }
  
}

function displayError(message){ 
  wordDisplay.innerHTML = `
   <div class="word-card error">
     <h3>Word not found</h3>
     <p>${message}</p>
   </div>  
  `
}


getData("hello");

function displayWord(word){
  const myWord = word[0];

  wordDisplay.innerHTML = `
    <div class="word-card">
      <h2>Word: ${myWord.word}</h2>

      ${myWord.meanings.map(meaning => `
        <div class="meaning-block">
          <p>Part of speech: ${meaning.partOfSpeech}</p>
          
          <ul>
            ${meaning.definitions.map(definition => `
              <li>${definition.definition}</li>
            `).join("")}
          </ul>
        </div>
      `).join("")}

      ${
        myWord.phonetics[0].audio
        ? `<audio class="audio-player" controls src="${myWord.phonetics[0].audio}"></audio>` 
        : ""
      }

    </div>
  `;

  /*
  wordDisplay.innerHTML = `
    <div class="word-card">
      <h2>Word: ${word.word}</h2>
      <p>Part of speech: ${word.partOfSpeech}</p>
      <p>Definition: ${word.definition1}</p>
     ${ 
       word.synonyms && word.synonyms.length > 0
        ? `<p>Synonyms: ${word.synonyms.join(", ")}</p>`
        : ""
      }
      ${
        word.audio 
        ? `<audio class="audio-player" controls src="${word.audio}"></audio>` 
        : ""
      }
    </div>
  `;
  */
}


  
 




