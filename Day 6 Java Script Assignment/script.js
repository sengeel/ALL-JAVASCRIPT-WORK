const quotes = [
   "The only way to do great work is to love what you do. - Steve Jobs",
   "Innovation distinguishes between a leader and a follower. - Steve Jobs",
   "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
   "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
   "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
   "Believe you can and you're halfway there. - Theodore Roosevelt",
   "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
   "It always seems impossible until it's done. - Nelson Mandela"
];

const quoteText = document.getElementById("quote-text");
const generateButton = document.getElementById("generate-button");

generateButton.addEventListener("click", generateQuote);

function generateQuote() {
   const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote-text").innerHTML = quotes[randomIndex]
}
