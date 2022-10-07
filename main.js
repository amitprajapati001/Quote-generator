let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");

fetch("https://type.fit/api/quotes")
  .then((res) => res.json())
  .then((data) => {
    const randomNumber = Math.trunc(Math.random() * data.length) + 1;

    quote.innerHTML = data[randomNumber].text;
    author.innerHTML = data[randomNumber].author;
  });

btn.addEventListener("click", function () {
  fetch("https://type.fit/api/quotes")
    .then((res) => res.json())
    .then((data) => {
      const randomNumber = Math.trunc(Math.random() * data.length) + 1;

      quote.innerHTML = data[randomNumber].text;
      author.innerHTML = data[randomNumber].author;
    });
});
