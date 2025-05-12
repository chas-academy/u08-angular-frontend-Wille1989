import { Component, OnInit } from '@angular/core';
import { ManufacturerService } from '../../../core/services/manufacturer.service';
import { Manufacturer } from '../../models/manufacturer.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-manufacturer-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './manufacturer-list.component.html',
  styleUrl: './manufacturer-list.component.css'
})
export class ManufacturerListComponent implements OnInit {
  manufacturers: Manufacturer[] = [];

  constructor(private manufacturerService: ManufacturerService) {  }

  ngOnInit(): void {
    this.manufacturerService.getAllManufacturers().subscribe((response) => {
      this.manufacturers = response.data;
    });
  }
}
