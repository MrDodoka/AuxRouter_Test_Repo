import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShopItemDetailResolver
  implements Resolve<{ id: number; name: string }>
{
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<{ id: number; name: string }> {
    console.log('asdasd');
    const id = route.paramMap.get('id');
    const weapons = [
      { id: 1, name: 'Sword' },
      { id: 2, name: 'Axe' },
      { id: 3, name: 'Bow' },
      { id: 4, name: 'Health Potion' },
      { id: 5, name: 'Mana Potion' },
      { id: 6, name: 'Stamina Potion' },
    ];

    const weapon = weapons.find((w) => w.id.toString() === id);
    console.log(weapon);
    return of(weapon);
  }
}
