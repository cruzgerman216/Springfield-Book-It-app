import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Book } from 'src/app/shared/book/book.model';
import { BookshelfService } from '../bookshelf.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  myBooks: Book[] = [];

  @Output() bookSelected = new EventEmitter<Book>();

  constructor(private bookshelfService: BookshelfService) {}

  ngOnInit(): void {
    this.myBooks = this.bookshelfService.getBooks();
    this.bookshelfService.bookListChanged.subscribe((books)=>{
      this.myBooks = books
    })
  }
  // . . .

  // . . .

  onBookSelected(book: Book) {
    // Tell App that someone clicked on a book!
    this.bookSelected.emit(book);
  }

  onRemoveBook(idx){
    this.bookshelfService.removeBook(idx)
  }
}
