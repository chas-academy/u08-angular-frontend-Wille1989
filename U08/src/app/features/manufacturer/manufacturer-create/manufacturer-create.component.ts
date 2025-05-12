import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ManufacturerService } from '../../../core/services/manufacturer.service';
import { ErrorHandler } from '../../../core/utils/errorHandler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manufacturer-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './manufacturer-create.component.html',
  styleUrl: './manufacturer-create.component.css'
})
export class ManufacturerCreateComponent {
  updateMessage: string | null = null;
  
  newManufacturer = {
    name: '',
    country: ''
  };

  formSubmitted: boolean = false;

  constructor(
    private manufacturerService: ManufacturerService,
    public router: Router ) 
    { }

  createManufacturer(): void {
    this.formSubmitted = true;

    if(!this.newManufacturer.name || !this.newManufacturer.country) {
      return;
    }

    this.manufacturerService.createManufacturer(this.newManufacturer).subscribe({
  next: (response) => {
    this.newManufacturer = { name: '', country: '' };
    this.formSubmitted = false;
    this.updateMessage = 'Tillverkare skapad!';

    setTimeout(() => {
      this.router.navigate([
        {
          outlets: {
            left: ['manufacturers'],
            right: ['discs']
          }
        }
      ]);
    }, 1000);
  },
  error: (err) => {
    const message = ErrorHandler.getErrorMessage(err);
    alert(message);
  }
});

  }
}
