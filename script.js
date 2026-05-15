let quoteEl = document.getElementById("quote");
let authorEl = document.getElementById("author");
let loadingEl = document.getElementById("loading");
let errorEl = document.getElementById("error");
let newQuoteBtn = document.getElementById("newQuoteBtn");

async function getQuote() {

  // Loading State
  loadingEl.textContent = "Loading quote...";
  errorEl.textContent = "";

  quoteEl.textContent = "";
  authorEl.textContent = "";

  try {

    let response = await fetch("https://dummyjson.com/quotes/random");

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    let data = await response.json();

    // Display Data
    loadingEl.textContent = "";

    quoteEl.textContent = `"${data.quote}"`;

    authorEl.textContent = `— ${data.author}`;

  }

  catch(error){

    loadingEl.textContent = "";

    errorEl.textContent =
      "Something went wrong. Please try again.";

    console.log(error);

  }

}

// Button Click
newQuoteBtn.addEventListener("click", getQuote);

// Initial Quote
getQuote();