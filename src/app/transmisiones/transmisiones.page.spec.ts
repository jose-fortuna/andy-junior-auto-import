import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransmisionesPage } from './transmisiones.page';

describe('TransmisionesPage', () => {
  let component: TransmisionesPage;
  let fixture: ComponentFixture<TransmisionesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TransmisionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
