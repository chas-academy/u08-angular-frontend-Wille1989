import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DiscService } from '../../../core/services/disc.service';
import { ManufacturerService } from '../../../core/services/manufacturer.service';

import { Disc } from '../../models/disc.model';
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
  disc: Disc = createEmptyDisc();
  manufacturers: Manufacturer[] = [];
  selectedManufacturerId: string = '';

  constructor(
    private discService: DiscService,
    private manufacturerService: ManufacturerService
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
    const newDisc: Disc = {
      ...this.disc,
      manufacturer: { _id: this.selectedManufacturerId, name: '', country: '' }
    }

    this.discService.createDisc(newDisc).subscribe(() => {
      console.log('Disc created!');
    });
  }
}
