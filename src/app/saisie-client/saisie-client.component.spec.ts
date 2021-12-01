import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaisieClientComponent } from './saisie-client.component';

describe('SaisieClientComponent', () => {
  let component: SaisieClientComponent;
  let fixture: ComponentFixture<SaisieClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaisieClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaisieClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
