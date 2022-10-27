import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HTTPService } from '../shared/http/http.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  collapsed: boolean = true;
  show: boolean = false;
  @Output() displayPage = new EventEmitter<string>();

  constructor(private httpService: HTTPService) {}

  ngOnInit(): void {}

  onSaveData() {
    this.httpService.saveBooksToFirebase();
  }

  onFetchData() {
    this.httpService.fetchBooksFromFirebase().subscribe();
}
}
