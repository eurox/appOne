import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouterOutlet } from '@angular/router';
// import {slider} from './app.animation';
import { slideInAnimation } from './app.animation';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slideInAnimation
    // slider
    // animation triggers go here
  ]
})
export class AppComponent {
  title = 'appOne-alpha';

  constructor(private snackBar: MatSnackBar) {
    this.snackBar.open('Welcome! This is a demo app to demonstrate my technical skills.', 'x', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      // duration: 7000
    });
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
