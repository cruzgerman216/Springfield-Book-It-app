import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Book } from '../shared/book/book.model';

@Injectable({
  providedIn: 'root',
})
export class LibraryService {
  private allBooks: Book[] = [];

  libraryListSubject = new Subject<Book[]>();
  constructor(private http: HttpClient) {}

  getBooks() {
    return this.allBooks.slice();
  }

  onFetchBooks(search: string) {
    const query = search.split(' ').join('+').toLowerCase();
    this.http
      .get(`http://openlibrary.org/search.json?q=${query}`)
      .subscribe((response) => {
        this.saveResponse(response);
      });
  }

  saveResponse(response) {
    response.docs.map((book) => {
      let title = book.title;
      let author = book.author_name ? book.author_name[0] : '';
      let genre = '';
      let coverImagePath =
        'https://stephenblandino.com/wp-content/uploads/2015/07/book-placeholder.jpg';
      let newBook = new Book(title, author, coverImagePath, genre);
      this.allBooks.push(newBook);
    });
    this.libraryListSubject.next(this.getBooks());
  }
}
