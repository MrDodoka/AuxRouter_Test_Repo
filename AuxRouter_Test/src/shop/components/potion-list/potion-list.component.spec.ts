/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PotionListComponent } from './potion-list.component';

describe('PotionListComponent', () => {
  let component: PotionListComponent;
  let fixture: ComponentFixture<PotionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PotionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PotionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
