console.log("Script running");

// Helper function - gets a random integer up to (but not including) the maximum
const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

// Capture the three major foci of user interaction in variables.
const submitButton = document.querySelector("#submit");
const queryField = document.querySelector("#search");
const imageHolderDiv = document.querySelector("#imageholder");

// Log the elements to confirm that the querySelectors worked.
console.log(submitButton);
console.log(queryField);
console.log(imageHolderDiv);

queryField.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    buttonClicked();
  }
});

const buttonClicked = async () => {
  let myKey = "RFNZP7O5CFInwilHjCwjbfEaN2dUfrLY";
  let topic = queryField.value;
  let url = `https://api.giphy.com/v1/gifs/search?api_key=${myKey}&q=${topic}+cute`;

  let response = await fetch(url);
  let data = await response.json();
  let randNum = getRandomInt(data.data.length);
  let imageURL = data.data[randNum].images.downsized.url;

  imageHolderDiv.innerHTML = `<img src = "${imageURL}"/>`;
};

submitButton.addEventListener("click", buttonClicked);
