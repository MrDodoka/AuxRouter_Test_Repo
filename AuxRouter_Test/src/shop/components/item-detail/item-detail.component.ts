import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss'],
})
export class ItemDetailComponent implements OnInit {
  weapon: { id: number; name: string };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log('asd');
    this.weapon = this.route.snapshot.data as { id: number; name: string };
  }
}
