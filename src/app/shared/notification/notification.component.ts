import { Component, OnInit } from '@angular/core';
import { BookshelfService } from 'src/app/bookshelf/bookshelf.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  constructor(private bookshelfService:BookshelfService) { }

  ngOnInit(): void {
    this.bookshelfService.bookListChanged.subscribe((booksList)=>{
      alert("List of books have been updated!")
    })
  }
}
