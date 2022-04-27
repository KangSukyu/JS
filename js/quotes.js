const quotes = [
  {
    quote:
      "At his best, man is the noblest of all animals; separated from law and justice he is the worst.",
    author: "Aristotle",
  },
  {
    quote: "The best revenge is massive success.",
    author: "Frank Sinatra",
  },
  {
    quote:
      "I do the very best I know how - the very best I can; and I mean to keep on doing so until the end.",
    author: "Abraham Lincoln",
  },
  {
    quote: "To give anything less than your best, is to sacrifice the gift.",
    author: "Steve Prefontaine",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
