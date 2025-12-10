import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SimpsonsService } from '../../services/simpsons';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-simpsons-list',
  templateUrl: './simpsons-list.html',
  styleUrls: ['./simpsons-list.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpsonsListComponent implements OnInit {

  protected characters: any[] = [];
  protected limit: number = 0;

  constructor(
    private _simpsonsService: SimpsonsService,
    private _router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this._simpsonsService.getAll().subscribe((resp: any) => {
      this.characters = resp.results;
      this.limit = resp.info.count;
      this.cdr.markForCheck();
    });
  }

  navigateToDetail(id: number) {
    this._router.navigate(['/simpsons', id]);
  }
}