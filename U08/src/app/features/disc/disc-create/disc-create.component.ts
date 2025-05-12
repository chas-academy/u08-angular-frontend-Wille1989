import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

import { DiscService } from '../../../core/services/disc.service';
import { ManufacturerService } from '../../../core/services/manufacturer.service';

import { DiscCreate } from '../../models/disc.model';
import { Manufacturer } from '../../models/manufacturer.model';
import { createEmptyDisc } from '../../models/disc.factory';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-disc-create',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './disc-create.component.html',
  styleUrl: './disc-create.component.css'
})
export class DiscCreateComponent implements OnInit {
  disc: DiscCreate = createEmptyDisc();
  manufacturers: Manufacturer[] = [];
  updateMessage: string | null = null;

  constructor(
    private discService: DiscService,
    private manufacturerService: ManufacturerService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.loadManufacturers();
  }

  loadManufacturers() {
    this.manufacturerService.getAllManufacturers().subscribe((data) => {
      this.manufacturers = data.data;
    });
  }

  onSubmit() {
  this.discService.createDisc(this.disc).subscribe({
    next: () => {
      this.updateMessage = 'Disc skapad!';

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
    error: err => {
      console.error('Skapande misslyckades:', err);
      alert('Något gick fel. Kontrollera att alla fält är korrekt ifyllda.');
    }
  });
}
}
