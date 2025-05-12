import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { Manufacturer } from '../../models/manufacturer.model';
import { ManufacturerService } from '../../../core/services/manufacturer.service';

@Component({
  selector: 'app-manufacturer-by-id',
  imports: [CommonModule, RouterModule],
  templateUrl: './manufacturer-by-id.component.html',
  styleUrl: './manufacturer-by-id.component.css'
})
export class ManufacturerByIdComponent implements OnInit {
  showManufacturer: Manufacturer | null = null;
  updateMessage: string | null = null;

  constructor(
    private manufacturerService: ManufacturerService,
    public route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.manufacturerService.getManufacturerById(id).subscribe((ApiResponse) => {
        this.showManufacturer = ApiResponse.data || ApiResponse.error;
      });
    }
  }
}
