import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { SimpsonsService } from '../../services/simpsons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-simpsons-detail',
  templateUrl: './simpsons-detail.html',
  styleUrls: ['./simpsons-detail.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpsonsDetailComponent implements OnInit {

  protected data: any = null;

  constructor(
    private route: ActivatedRoute,
    private api: SimpsonsService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;

    this.api.getOne(id).subscribe((res: any) => {
      this.data = res;
      this.cdr.markForCheck();
    });
  }
}