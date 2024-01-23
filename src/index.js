function displayFact(response) {
  new Typewriter("#fact", {
    strings: [response.data.answer],
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateFact(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#instructions");
  let apiKey = "1fabbbt6e694149ea2da3obbe200ebf2";
  let prompt = `User instructions: Generate one random fact about ${instructionsInput.value}`;
  let context =
    "You mission is to generate one rare fact about the user instruction anime in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the fact.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiURL).then(displayFact);
}

let factFormElement = document.querySelector("#fact-generator-form");
factFormElement.addEventListener("submit", generateFact);
