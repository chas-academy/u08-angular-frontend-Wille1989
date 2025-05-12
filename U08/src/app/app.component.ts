import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationButtonsComponent } from './shared/components/navigation/navigation-buttons/navigation-buttons.component';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    NavigationButtonsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'U08';
}
