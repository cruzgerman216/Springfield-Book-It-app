import { EventEmitter, Injectable } from '@angular/core';
import { Book } from '../shared/book/book.model';

@Injectable({
  providedIn: 'root',
})
export class BookshelfService {
  private myBooks: Book[] = [
    new Book(
      'No Easy Day',
      'Mark Owen',
      'https://m.media-amazon.com/images/I/41fv0vc4WhL.jpg',
      'Non-Fiction'
    ),
    new Book(
      'The Princess',
      'Lori Wick',
      'https://img.thriftbooks.com/api/images/m/0fe1dbf72276f2f7c572c0c983f1b895d448e2e1.jpg',
      'Christian fiction'
    ),
    new Book(
      'Under The Same Sky',
      'Cynthia Defelice',
      'http://www.moviemars.com/GetProductImage.ashx?i=13579955.jpg&w=500&/13579955_500.jpg',
      'Fiction'
    ),
  ];
  bookSelected = new EventEmitter<Book>();
  bookListChanged = new EventEmitter<Book[]>();

  getBooks() {
    return this.myBooks.slice();
  }

  // Remove a book
  removeBook(idx: number) {
    this.myBooks.splice(idx, 1);
    this.bookListChanged.emit(this.getBooks());
  }

  // Add a book
  addBook(book: Book) {
    this.myBooks.push(book);
    this.bookListChanged.emit(this.getBooks());
  }
  getBook(idx: number) {
    return this.myBooks.slice()[idx]
  }
  constructor() {}
}
