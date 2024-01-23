function displayFact(response) {
  new Typewriter("#fact", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateFact(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "1fabbbt6e694149ea2da3obbe200ebf2";
  let prompt = `User instructions: Generate one rare random fact about ${instructionsInput.value}`;
  let context =
    "You mission is to generate one rare fact about the user instruction anime. Make sure to follow the user instructions. Do not include a title to the fact. Sign the fact with 'SheCodes AI' inside a <strong> element at the end of the fact and NOT at the beginning. Separate the signature from the fact with a <br />";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let factElement = document.querySelector("#fact");
  factElement.classList.remove("hidden");
  factElement.innerHTML = `<div class="generating">⏳ Generating a random fact about ${instructionsInput.value}...</div>`;

  axios.get(apiURL).then(displayFact);
}

let factFormElement = document.querySelector("#fact-generator-form");
factFormElement.addEventListener("submit", generateFact);
