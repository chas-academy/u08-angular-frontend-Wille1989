import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { Manufacturer } from '../../models/manufacturer.model';
import { ManufacturerService } from '../../../core/services/manufacturer.service';

import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-manufacturer-update',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './manufacturer-update.component.html',
  styleUrl: './manufacturer-update.component.css'
})
export class ManufacturerUpdateComponent implements OnInit {
  editingManufacturer: Manufacturer | null = null;
  updateMessage: string | null = null;

  constructor(
    private manufacturerService: ManufacturerService,
    public route: ActivatedRoute,
    private router: Router)
    { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if(id) {
      this.manufacturerService.getManufacturerById(id).subscribe((ApiResponse) => {
        this.editingManufacturer = ApiResponse.data || ApiResponse;
      });
    }
  }

  saveManufacturer() {
    if(this.editingManufacturer) {
      const updates: Partial<Manufacturer> = {};

      if(this.editingManufacturer.name) {
        updates.name = this.editingManufacturer.name;
      }

      if(this.editingManufacturer.country) {
        updates.country = this.editingManufacturer.country;
      }

      this.manufacturerService.updateManufacturerPartial(
        this.editingManufacturer._id,
        updates
      ).subscribe(() => {
        const manufacturerId = this.editingManufacturer?._id;

        this.editingManufacturer = null;
        this.updateMessage = 'Tillverkaren uppdaterad!';

        setTimeout(() => {
          if (manufacturerId) {
            this.router.navigate([
              { outlets: { 
                left: ['manufacturers'],
                right: ['discs'] 
              } 
              }
            ]);
          }
        }, 1000);
      });
    }
  }

  cancelEdit() {
    this.editingManufacturer = null;
    this.router.navigate(['/']);
  }

  confirmDelete() {
    if (confirm('Är du säker på att du vill ta bort tillverkare och tillhörande discar?')) {
      if (this.editingManufacturer?._id) {
        this.manufacturerService.deleteManufacturerById(this.editingManufacturer._id).subscribe(() => {

          this.updateMessage = 'Tillverkare raderad!';
          
            setTimeout(() => {
              this.router.navigate([
                { 
                  outlets: 
                  { 
                    left: null,
                    right: null 
                  } 
                }
              ]).then(() => {
                this.router.navigate([
                {
                  outlets: 
                  {
                    left: ['manufacturers'],
                    right: ['discs']
                  }
                  }
                ]);
              });
            }, 700);
        });
      }
    }
  }
}
