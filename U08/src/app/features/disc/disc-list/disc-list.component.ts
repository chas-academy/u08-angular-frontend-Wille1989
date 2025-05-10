import { Component, OnInit } from '@angular/core';
import { DiscService } from '../../../core/services/disc.service';
import { Disc } from '../../models/disc.model';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-disc-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './disc-list.component.html',
  styleUrls: ['./disc-list.component.css']
})
export class DiscListComponent implements OnInit {
  manufacturerId: string | null = null;
  searchTerm: string = '';

  allDiscs: Disc[] = [];
  discs: Disc[] = [];

  constructor(
    private discService: DiscService,
    private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.manufacturerId = params.get('manufacturerId');
      this.loadDiscs();
    });
  }

    private loadDiscs(): void {
    this.discService.getAllDiscs().subscribe((response) => {
      this.allDiscs = response.data.map(disc => ({
        ...disc,
        id: disc._id,
        title: disc.title.toUpperCase(),
        manufacturer: {
          ...disc.manufacturer,
          name: disc.manufacturer.name.toUpperCase()
        }
      }))
      .sort((a,b) => a.title.localeCompare(b.title));

      this.discs = [...this.allDiscs];

      this.discs = this.manufacturerId
      ? this.allDiscs.filter(d => d.manufacturer._id === this.manufacturerId)
      : [...this.allDiscs];
    });
  }

  onSearchChange(): void {
    if(this.searchTerm.trim() === '' ){
      this.loadDiscs();
      return;
    }

    this.discService.searchDiscs(this.searchTerm).subscribe((response) => {
      this.allDiscs = response.data;
      this.discs = [...this.allDiscs];
    });
  }

}
