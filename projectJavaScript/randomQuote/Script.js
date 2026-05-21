const quote = [
  { text: "just do it", author: "nike" },
  { text: "The only way to do great work is to love what you do", author: "Steve Jobs" },
  { text: "Life is what happens when you're busy making other plans", author: "John Lennon" },
  { text: "In the end, it's not the years in your life that count. It's the life in your years", author: "Abraham Lincoln" },
  { text: "Be the change that you wish to see in the world", author: "Mahatma Gandhi" },
  { text: "The future belongs to those who believe in the beauty of their dreams", author: "Eleanor Roosevelt" },
  { text: "Stay hungry, stay foolish", author: "Steve Jobs" },
  { text: "I have a dream", author: "Martin Luther King Jr." },
  { text: "To be or not to be, that is the question", author: "William Shakespeare" },
  { text: "Imagination is more important than knowledge", author: "Albert Einstein" },
  { text: "The only limit to our realization of tomorrow is our doubts of today", author: "Franklin D. Roosevelt" },
  { text: "It does not matter how slowly you go as long as you do not stop", author: "Confucius" },
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts", author: "Winston Churchill" },
  { text: "The purpose of our lives is to be happy", author: "Dalai Lama" },
  { text: "You only live once, but if you do it right, once is enough", author: "Mae West" },
];

const quotetext = document.getElementById("quote");
const author = document.getElementById("author");
const newQuoteButton = document.getElementById("new-quote");

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quote.length);
  const randomQuote = quote[randomIndex];
  quotetext.textContent = `"${randomQuote.text}"`;
  author.textContent = `"${randomQuote.author}"`;
}

newQuoteButton.addEventListener("click", generateQuote);

generateQuote();
