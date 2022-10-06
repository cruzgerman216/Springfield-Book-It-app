import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Book } from '../shared/book/book.model';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.css'],
})
export class BookshelfComponent implements OnInit {
  authors = [];
  constructor() {}
  selectedBook: Book;

  ngOnInit(): void {}


}
