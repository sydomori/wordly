const url = "https://api.dictionaryapi.dev/api/v2/entries/en/hello"

async function getData(word){
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  try{
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
  }catch(error){
    console.log(error)
  }
}

getData("hello")



