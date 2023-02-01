import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-weapon-list',
  templateUrl: './weapon-list.component.html',
  styleUrls: ['./weapon-list.component.scss'],
})
export class WeaponListComponent implements OnInit {
  weapons = [
    { id: 1, name: 'Sword' },
    { id: 2, name: 'Axe' },
    { id: 3, name: 'Bow' },
  ];

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  onSelect(id: number) {
    this.router.navigate([{ outlets: { detail: [id] } }], {
      relativeTo: this.route,
    });
  }
}
