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
  updateMessage: string | null = null;

  constructor( 
    private discService: DiscService,
    public route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
  const id = this.route.snapshot.paramMap.get('id');

  if (id) {
    this.discService.getDiscById(id).subscribe(ApiResponse => {
      this.showDisc = ApiResponse.data || null;
    });
  }
}

editDisc(): void {
  if (this.showDisc?._id) {
    this.router.navigate([
      {
        outlets: {
          left: ['update', 'disc', this.showDisc._id],
          right: ['discs', this.showDisc.manufacturer._id]
        }
      }
    ]);
  }
}

  

  confirmDelete() {
    if (confirm('Är du säker på att du vill ta bort denna disc?')) {
      if (this.showDisc?._id) {
        this.discService.deleteDiscById(this.showDisc._id).subscribe(() => {
          this.updateMessage = 'Disc raderad!';

          setTimeout(() => {
            this.router.navigate([
              {
                outlets: {
                  left: null,
                  right: null
                }
              }
            ]).then(() => {
              this.router.navigate([
                {
                  outlets: {
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
