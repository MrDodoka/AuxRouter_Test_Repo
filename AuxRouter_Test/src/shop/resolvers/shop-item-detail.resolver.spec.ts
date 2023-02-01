import { TestBed } from '@angular/core/testing';

import { ShopItemDetailResolver } from './shop-item-detail.resolver';

describe('ShopItemDetailResolver', () => {
  let resolver: ShopItemDetailResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ShopItemDetailResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
