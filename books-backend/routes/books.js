var express = require('express');
var router = express.Router();

/* GET users listing. */
const books = [
  {
    id: 1,
    author: "Chinua Achebe",
    isbn: 9780435272463,
    name: "Things Fall Apart",
    year: 1958,
  },
  {
    id: 2,
    author: "Hans Christian Andersen",
    isbn: 9780517336328,
    name: "Fairy tales",
    year: 1836,
  },
  {
    id: 3,
    author: "Dante Alighieri",
    isbn: 9781532704178,
    name: "The Divine Comedy",
    year: 1315,
  },
  {
    id: 4,
    author: "Unknown",
    isbn: 9788483468265,
    name: "The Epic Of Gilgamesh",
    year: -1700,
  },
  {
    id: 5,
    author: "Stephen Mitchell",
    isbn: 9780060553418,
    name: "The Book Of Job",
    year: -600,
  },
  {
    id: 6,
    author: "Scheherazade",
    isbn: 9780706411157,
    name: "One Thousand and One Nights",
    year: 1200,
  },
];


router.get('/', function(req, res, next) {
  res.send(books);
});

router.get("/:id", function(req, res, next) {
  //Line 9
  const currentBook = books.find((c) => c.id === parseInt(req.params.id));
  if (!currentBook) {
    return res.status(404).send("The Book with the given id was not found");
  }

  res.send(currentBook); //Line 10
});

router.post("/", (req, res) => {

  const currentId = books[books.length- 1].id;
  const currentBook = {
    id: currentId + 1,
    name: req.body.name,
    author: req.body.author,
    year: req.body.year,
    isbn: req.body.isbn,
  };
  books.push(currentBook);
  res.send(currentBook);
});

router.put("/:id", (req, res) => {
  const currentBook = books.find((c) => c.id === parseInt(req.params.id));
  if (!currentBook) {
    return res.status(404).send("The Book with the given id was not found");
  }
  currentBook.name = req.body.name;
  currentBook.author = req.body.author;
  currentBook.year = req.body.year;
  currentBook.isbn = req.body.isbn;
  res.send(currentBook);
});

router.delete("/:id", (req, res) => {
  const currentBook = books.find((c) => c.id === parseInt(req.params.id));
  if (!currentBook)
    return res.status(404).send("The Book with the given id was not found");

  const index = books.indexOf(currentBook);
  books.splice(index, 1);
  res.send(currentBook);
});
module.exports = router;
