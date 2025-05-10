import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Disc } from '../../models/disc.model';
import { DiscService } from '../../../core/services/disc.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-disc-by-id',
  imports: [CommonModule, RouterModule],
  templateUrl: './disc-by-id.component.html',
  styleUrl: './disc-by-id.component.css'
})
export class DiscByIdComponent implements OnInit {
  showDisc: Disc | null = null;

  constructor( 
    private discService: DiscService,
    public route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.discService.getDiscById(id).subscribe((ApiResponse) => {
        this.showDisc = ApiResponse.data || ApiResponse;
      });
    }
  }

  editDisc() {
  if (this.showDisc && this.showDisc._id) {
    this.router.navigate(['/update/disc', this.showDisc._id]);
  }
}
}
