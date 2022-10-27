import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Book } from 'src/app/shared/book/book.model';
import { BookshelfService } from '../bookshelf.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit, OnDestroy {
  myBooks: Book[] = [];
  private bookListSub: Subscription;

  constructor(
    private bookshelfService: BookshelfService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Use the Service to set local "myBooks" array to Service/Global "myBooks" array
    this.myBooks = this.bookshelfService.getBooks();
    // Listen for changes on the global "myBooks" array and update the local version
    this.bookListSub = this.bookshelfService.bookListChanged.subscribe(
      (books: Book[]) => {
        this.myBooks = books;
      }
    );
  }

  ngOnDestroy(): void {
    this.bookListSub.unsubscribe();
  }
  onRemoveBook(idx) {
    this.bookshelfService.removeBook(idx);
  }
  onNewBook() {
    this.router.navigate(['new'], { relativeTo: this.route });
}
}
