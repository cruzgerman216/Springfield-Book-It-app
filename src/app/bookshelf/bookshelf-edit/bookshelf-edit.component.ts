import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-bookshelf-edit',
  templateUrl: './bookshelf-edit.component.html',
  styleUrls: ['./bookshelf-edit.component.css']
})
export class BookshelfEditComponent implements OnInit {
  idx: number;
  isEditMode = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.idx = +params["id"];
      this.isEditMode = params["id"] != null;
      console.log("%c  isEditMode: ", "color: red;", this.isEditMode);
    });
  }
}
