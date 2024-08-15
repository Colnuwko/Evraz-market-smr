import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {DialogContentExampleDialog} from "./dialog-content-example-dialog";
import {CategoryService} from "../../../Services/category.service";
import {CategoryInt} from "../../../Interfaces/category";

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css',

})
export class CatalogComponent {
  categories!: CategoryInt[];

  constructor(public dialog: MatDialog, private dataService: CategoryService,) {
  }

  ngOnInit(): void {
    this.dataService.getCategories().subscribe(categories => {
      this.categories = categories;
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogContentExampleDialog, {
      data: this.categories,
      width: '1000px',
      autoFocus: false,
      maxHeight: '90vh'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}


