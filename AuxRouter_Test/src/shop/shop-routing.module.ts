import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { ShopComponent } from '../shop/components/shop/shop.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { PotionListComponent } from './components/potion-list/potion-list.component';
import { WeaponListComponent } from './components/weapon-list/weapon-list.component';
import { ShopItemDetailResolver } from './resolvers/shop-item-detail.resolver';

const routes: Routes = [
  {
    path: '',
    component: ShopComponent,
    children: [
      {
        path: 'potions',
        component: PotionListComponent,
        children: [
          {
            path: ':id',
            component: ItemDetailComponent,
            outlet: 'detail',
            resolve: { weapon: ShopItemDetailResolver },
          },
        ],
      },
      {
        path: 'weapons',
        component: WeaponListComponent,
        children: [
          {
            path: ':id',
            component: ItemDetailComponent,
            outlet: 'detail',
            resolve: { potion: ShopItemDetailResolver },
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule {}
