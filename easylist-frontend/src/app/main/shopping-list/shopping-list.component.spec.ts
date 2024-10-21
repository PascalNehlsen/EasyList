import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppinglistCompontent } from './shopping-list.component';

describe('ShoppingListComponent', () => {
  let component: ShoppinglistCompontent;
  let fixture: ComponentFixture<ShoppinglistCompontent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoppinglistCompontent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShoppinglistCompontent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
