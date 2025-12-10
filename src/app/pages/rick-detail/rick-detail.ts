import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { RickService } from '../../services/rick';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rick-detail',
  templateUrl: './rick-detail.html',
  styleUrls: ['./rick-detail.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RickDetailComponent implements OnInit {

  data: any = null;

  constructor(
    private route: ActivatedRoute,
    private rickService: RickService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.rickService.getCharacterById(id).subscribe((resp) => {
        this.data = resp;
        this.cdr.markForCheck(); // 🔥 AHORA SÍ ACTUALIZA
      });
    }
  }
}