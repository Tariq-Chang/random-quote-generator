import quotes from "./quotes";

const quote = document.getElementById('quote');
const source = document.getElementById('source');
const generateBtn = document.getElementById('generate-btn');

console.log(quote);
quote.innerHTML = quotes[0].quote;
source.innerHTML = quotes[0].source;
generateBtn.addEventListener('click', () => {
    const index = Math.floor(Math.random() * quotes.length)
    quote.innerHTML = quotes[index].quote;
    source.innerHTML = quotes[index].source
})


