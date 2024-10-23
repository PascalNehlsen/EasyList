import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortAtHomeComponent } from './sort-at-home.component';

describe('SortAtHomeComponent', () => {
  let component: SortAtHomeComponent;
  let fixture: ComponentFixture<SortAtHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SortAtHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SortAtHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
