import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';

import { Disc } from '../../models/disc.model';
import { DiscService } from '../../../core/services/disc.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-disc-update',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './disc-update.component.html',
  styleUrl: './disc-update.component.css'
})
export class DiscUpdateComponent implements OnInit {
  editingDisc: Disc | null = null;
  updateMessage: string | null = null;

  constructor(
    private discService: DiscService,
    public route: ActivatedRoute,
    private router: Router
  ) 
  { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.discService.getDiscById(id).subscribe((ApiResponse) => {
        this.editingDisc = ApiResponse.data || ApiResponse
      })
    }
  }

  saveDisc() {
    if(this.editingDisc) {
      const updates: Partial<Disc> = {};

      if(this.editingDisc.title) {
        updates.title = this.editingDisc.title;
      }
      if(this.editingDisc.type) {
        updates.type = this.editingDisc.type;
      }
      if(this.editingDisc.speed) {
        updates.speed = this.editingDisc.speed;
      }
      if(this.editingDisc.turn) {
        updates.turn = this.editingDisc.turn;
      }
      if(this.editingDisc.fade) {
        updates.fade = this.editingDisc.fade;
      }
      if(this.editingDisc.glide) {
        updates.glide = this.editingDisc.glide;
      }

      this.discService.updateDiscPartial(
        this.editingDisc._id,
        updates
      ).subscribe(() => {
        const discId = this.editingDisc?._id;
        this.updateMessage = 'Disc uppdaterad!';

        setTimeout(() => {
          this.editingDisc = null;

          if (discId) {
            this.router.navigate([
              {
                outlets: {
                  left: ['manufacturers'],
                  right: ['discs']
                }
              }]);
          } 
        }, 600);
      });
    }
  }

   cancelEdit() {
      this.editingDisc = null;
      this.router.navigate(['/']);
    }
}
