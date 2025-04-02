/**
 * @component AppComponent
 * This is the root component of the application.
 * It serves as the entry point for the Angular application.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  /**
   * @property {string} title - The title of the application.
   */
  title = 'my-app';

  /**
   * @property {string} unusedVariable - A variable that is not used (intentional for linting test).
   */

  /**
   * @constructor
   * Initializes the AppComponent and logs a message to the console.
   * Contains intentional linting issues for testing purposes.
   */

  onChange() {
    console.log('change');
  }
}
