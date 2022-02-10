import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScatterResultSheetComponent } from './scatter-result-sheet.component';

describe('ScatterResultSheetComponent', () => {
  let component: ScatterResultSheetComponent;
  let fixture: ComponentFixture<ScatterResultSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScatterResultSheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScatterResultSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
