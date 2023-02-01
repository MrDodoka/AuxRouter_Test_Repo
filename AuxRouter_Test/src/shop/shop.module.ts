import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShopComponent } from '../shop/components/shop/shop.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { PotionListComponent } from './components/potion-list/potion-list.component';
import { WeaponListComponent } from './components/weapon-list/weapon-list.component';
import { ShopRoutingModule } from './shop-routing.module';

@NgModule({
  imports: [CommonModule, ShopRoutingModule],
  declarations: [
    ShopComponent,
    WeaponListComponent,
    PotionListComponent,
    ItemDetailComponent,
  ],
})
export class ShopModule {}
