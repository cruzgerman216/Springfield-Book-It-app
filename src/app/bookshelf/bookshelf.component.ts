import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Book } from '../shared/book/book.model';
import { BookshelfService } from './bookshelf.service';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.css'],
})
export class BookshelfComponent implements OnInit {
  selectedBook: Book;

  constructor(private bookshelfService: BookshelfService) {}

  ngOnInit(): void {
    // Subscribe to the bookshelfService to get all the global updates inside this component
    this.bookshelfService.bookSelected.subscribe((book: Book) => {
      this.selectedBook = book;
    });
  }
}
