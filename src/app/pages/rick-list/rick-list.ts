import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RickService } from '../../services/rick';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rick-list',
  templateUrl: './rick-list.html',
  styleUrls: ['./rick-list.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RickListComponent implements OnInit {

  protected characters: any[] = [];
  protected limit: number = 0;

  constructor(
    private _rickService: RickService,
    private _router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this._rickService.getCharacters().subscribe((resp: any) => {
      this.characters = resp.results;
      this.limit = resp.info.count;
      this.cdr.markForCheck();

    });
  }

  navigateToDetail(id: number) {
    this._router.navigate(['/rick', id]);
  }
}