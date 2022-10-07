import { Injectable } from '@angular/core';
import { Book } from '../shared/book/book.model';

@Injectable({
  providedIn: 'root',
})
export class LibraryService {
  private allBooks: Book[] = [
    new Book(
      'The man who died twice',
      'Richard Osman',
      'https://m.media-amazon.com/images/I/61Kwfj2pEkL.jpg',
      'Fiction'
    ),
  ];

  getBooks(){
    return this.allBooks.slice();
  }

  constructor() {}
}
