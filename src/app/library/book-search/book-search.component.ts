import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {

  constructor(private libraryService:LibraryService) { }

  ngOnInit(): void {
  }

  onSubmit(searchBooksForm:NgForm){
    const searchQuery = searchBooksForm.value.search
    this.libraryService.onFetchBooks(searchQuery)
  }

}
