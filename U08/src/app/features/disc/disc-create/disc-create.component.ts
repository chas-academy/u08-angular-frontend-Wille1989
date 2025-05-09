import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DiscService } from '../../../core/services/disc.service';
import { ManufacturerService } from '../../../core/services/manufacturer.service';

import { Disc } from '../../models/disc.model';
import { Manufacturer } from '../../models/manufacturer.model';
import { ApiResponse } from '../../models/api-response.model';


@Component({
  selector: 'app-disc-create',
  imports: [CommonModule, RouterModule],
  templateUrl: './disc-create.component.html',
  styleUrl: './disc-create.component.css'
})
export class DiscCreateComponent implements OnInit {
  disc: Disc = {};
  manufacturers: Manufacturer[] = [];
  selectedManufacturerId: string = '';

  constructor(
    private discService: DiscService,
    private manufacturerService: ManufacturerService
  ) {}

  ngOnit() {
    this.loadManufacturers();
  }

  loadManufacturers() {
    this.manufacturerService.getAllManufacturers().subscribe((data) => {
      this.manufacturers = data.data;
    });
  }

  onSubmit() {
    const newDisc: Partial<Disc> = {
      ...this.disc,
      manufacturer: { id: this.selectedManufacturerId, name: ''; }
    }

    this.discService.createDisc(newDisc).subscribe(() => {
      console.log('Disc created!');
    });
  }
}
