import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatInputModule} from '@angular/material/input';


import {NgModule} from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatTabsModule, MatCardModule, MatDividerModule, MatListModule, MatToolbarModule, MatIconModule, MatMenuModule, MatSnackBarModule, MatInputModule],
  exports: [MatButtonModule, MatCheckboxModule, MatTabsModule, MatCardModule, MatDividerModule, MatListModule, MatToolbarModule, MatIconModule, MatMenuModule, MatSnackBarModule, MatInputModule],
})
export class MaterialModule { }
