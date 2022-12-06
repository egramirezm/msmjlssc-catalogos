import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminActoresComponent } from './admin-actores.component';

describe('AdminActoresComponent', () => {
  let component: AdminActoresComponent;
  let fixture: ComponentFixture<AdminActoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminActoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminActoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
