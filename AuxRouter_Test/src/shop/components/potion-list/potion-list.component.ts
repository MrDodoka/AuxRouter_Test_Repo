import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-potion-list',
  templateUrl: './potion-list.component.html',
  styleUrls: ['./potion-list.component.scss'],
})
export class PotionListComponent implements OnInit {
  potions = [
    { id: 1, name: 'Health Potion' },
    { id: 2, name: 'Mana Potion' },
    { id: 3, name: 'Stamina Potion' },
  ];

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  onSelect(id: number) {
    this.router.navigate([{ outlets: { detail: [id] } }], {
      relativeTo: this.route,
    });
  }
}
