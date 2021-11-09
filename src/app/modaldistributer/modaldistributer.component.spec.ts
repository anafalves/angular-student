import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaldistributerComponent } from './modaldistributer.component';

describe('ModaldistributerComponent', () => {
  let component: ModaldistributerComponent;
  let fixture: ComponentFixture<ModaldistributerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModaldistributerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModaldistributerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
