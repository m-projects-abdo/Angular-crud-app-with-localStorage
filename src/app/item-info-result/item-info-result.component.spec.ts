import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemInfoResultComponent } from './item-info-result.component';

describe('ItemInfoResultComponent', () => {
  let component: ItemInfoResultComponent;
  let fixture: ComponentFixture<ItemInfoResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemInfoResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemInfoResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
