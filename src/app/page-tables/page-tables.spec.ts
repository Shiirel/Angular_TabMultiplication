import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTables } from './page-tables';

describe('PageTables', () => {
  let component: PageTables;
  let fixture: ComponentFixture<PageTables>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageTables]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageTables);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
