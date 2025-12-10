import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DragonService } from '../../services/dragon';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dragon-list',
  templateUrl: './dragon-list.html',
  standalone: true,
  imports: [CommonModule, RouterModule],
  styleUrls: ['./dragon-list.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DragonListComponent implements OnInit {

  personajes: any[] = [];

  constructor(
    private api: DragonService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.api.getAll().subscribe(res => {
      this.personajes = res.items;
      this.cdr.markForCheck(); 
    });
  }
}