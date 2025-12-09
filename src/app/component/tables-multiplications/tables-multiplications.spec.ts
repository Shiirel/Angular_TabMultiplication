import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesMultiplications } from './tables-multiplications';

describe('TablesMultiplications', () => {
  let component: TablesMultiplications;
  let fixture: ComponentFixture<TablesMultiplications>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablesMultiplications]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablesMultiplications);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
