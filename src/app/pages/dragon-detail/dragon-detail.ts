import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DragonService } from '../../services/dragon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dragon-detail',
  templateUrl: './dragon-detail.html',
  standalone: true,
  imports: [CommonModule, RouterModule],
  styleUrls: ['./dragon-detail.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DragonDetailComponent implements OnInit {

  data: any = null;

  constructor(
    private route: ActivatedRoute,
    private api: DragonService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;

    this.api.getOne(id).subscribe(res => {
      this.data = res;
      this.cdr.markForCheck(); 
    });
  }
}