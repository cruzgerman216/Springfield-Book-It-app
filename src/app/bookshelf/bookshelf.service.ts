import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Book } from '../shared/book/book.model';

@Injectable({
  providedIn: 'root',
})
export class BookshelfService {
  private myBooks: Book[] = [];
  bookSelected = new Subject<Book>();
  bookListChanged = new Subject<Book[]>();

  getBooks() {
    return this.myBooks.slice();
  }

  // Remove a book
  removeBook(idx: number) {
    this.myBooks.splice(idx, 1);
    this.bookListChanged.next(this.getBooks());
  }

  // Add a book
  addBook(book: Book) {
    this.myBooks.push(book);
    this.bookListChanged.next(this.getBooks());
  }

  updateBook(idx: number, newBook: Book) {
    // Update the object
    this.myBooks[idx] = newBook;
    // Broadcast to subscribers of updated array
    this.bookListChanged.next(this.getBooks());
  }
  getBook(idx: number) {
    return this.myBooks.slice()[idx];
  }
  setBooks(books: Book[] | []) {
    console.log('%c  books: ', 'color: red;', books);

    this.myBooks = books || [];
    this.bookListChanged.next(this.myBooks.slice());
  }
  constructor() {}
}
