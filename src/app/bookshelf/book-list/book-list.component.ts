import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/book/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  myBooks: Book[] = [
    new Book("Children of Time", "Adrian Check", "https://m.media-amazon.com/images/I/51tuexbxdIL._SL500_.jpg", "Sci-Fi"),
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
