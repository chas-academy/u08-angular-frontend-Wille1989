import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ManufacturerService } from '../../../core/services/manufacturer.service';
import { ErrorHandler } from '../../../core/utils/errorHandler';

@Component({
  selector: 'app-manufacturer-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './manufacturer-create.component.html',
  styleUrl: './manufacturer-create.component.css'
})
export class ManufacturerCreateComponent {
  
  newManufacturer = {
    name: '',
    country: ''
  };

  formSubmitted: boolean = false;

  constructor(private manufacturerService: ManufacturerService) { }

  createManufacturer(): void {
    this.formSubmitted = true;

    if(!this.newManufacturer.name || !this.newManufacturer.country) {
      return;
    }

    this.manufacturerService.createManufacturer(this.newManufacturer).subscribe({
      next: (response) => {
        console.log('Tillverkare skapad:', response.data);
        this.newManufacturer = { name: '', country: '' };
        this.formSubmitted = false;
        alert('Tillverkare skapad!');
      },
      error: (err) => {
        const message = ErrorHandler.getErrorMessage(err);
        alert(message);
      }
    });
  }
}
