import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/book/book.model';

@Component({
  selector: 'app-book-results',
  templateUrl: './book-results.component.html',
  styleUrls: ['./book-results.component.css']
})
export class BookResultsComponent implements OnInit {
  allBooks: Book[] = [
    new Book("Fahrenheit", "Ray Berries","https://assets1.ignimgs.com/2018/05/18/1832476eoxdjze-1526605535734_160w.jpg?width=1280" , "Fiction")
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
