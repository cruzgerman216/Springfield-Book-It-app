import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './bookshelf/book-details/book-details.component';
import { BookshelfEditComponent } from './bookshelf/bookshelf-edit/bookshelf-edit.component';
import { BookshelfHomeComponent } from './bookshelf/bookshelf-home/bookshelf-home.component';
import { BookshelfComponent } from './bookshelf/bookshelf.component';
import { LibraryComponent } from './library/library.component';

const routes: Routes = [
  // localhost:4200/bookshelf
  // localhost:4200/bookshelf/edit
  // localhost:4200/bookshelf/details

  {
    path: 'bookshelf',
    component: BookshelfComponent,
    children: [
      { path: "", component: BookshelfHomeComponent },
      { path: "new", component: BookshelfEditComponent },
      { path: ":id", component: BookDetailsComponent },
      { path: ":id/edit", component: BookshelfEditComponent }
    ],
  },
  // Localhost:4200/library
  {
    path: 'library',
    component: LibraryComponent,
  },
  // localhost:4200/
  {
    path: '',
    redirectTo: 'bookshelf',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}