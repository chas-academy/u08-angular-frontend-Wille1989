import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation-buttons',
  imports: [CommonModule, RouterModule],
  templateUrl: './navigation-buttons.component.html',
  styleUrl: './navigation-buttons.component.css'
})
export class NavigationButtonsComponent {
  constructor(private router: Router) { }

  goHome() {
      this.router.navigate([{ outlets: { left: ['manufacturers'], right: ['discs'] } }]);
  }

  goCreateDisc() {
    this.router.navigate([{ outlets: { right: ['create', 'disc'] } }]);
  }

  goCreateManufacturer() {
    this.router.navigate([{ outlets: { left: ['create', 'manufacturers'] } }]);
  }
}
