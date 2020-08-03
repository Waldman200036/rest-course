/* eslint-disable no-param-reassign */
/* jshint esversion: 6 */
const express = require('express');

function routes(Book) {
  const bookRouter = express.Router();
  bookRouter.route('/books')
    .post((req, res) => {
      const book = new Book(req.body);

      // eslint-disable-next-line no-console
      book.save();
      return res.status(201).json(book);
    })
    .get((req, res) => {
      const query = {};
      /*     if (req.query) {
        query.genre = req.query.genre;
      } */
      Book.find(query, (err, books) => {
        if (err) {
          return res.send(err);
        }
        return res.json(books);
      });
      // res.json(response);
    });

  bookRouter.route('/books/:bookId')
    .get((req, res) => {
      Book.findById(req.params.bookId, (err, book) => {
        if (err) {
          return res.send(err);
        }
        return res.json(book);
      });
      // res.json(response);
    })
    .put((req, res) => {
      Book.findById(req.params.bookId, (err, book) => {
        if (err) {
          return res.send(err);
        }
        book.title = req.body.title;
        book.author = req.body.author;
        book.genre = req.body.genre;
        book.read = req.body.read;
        book.save();
        return res.json(book);
      });
    });

  return bookRouter;
}

module.exports = routes;
