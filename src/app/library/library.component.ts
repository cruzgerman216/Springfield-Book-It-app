import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book/book.model';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css'],
})
export class LibraryComponent implements OnInit {


  constructor() {}

  ngOnInit(): void {
    console.log('Library component was created!');
  }
}
