import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscobasComponent } from './escobas.component';

describe('EscobasComponent', () => {
  let component: EscobasComponent;
  let fixture: ComponentFixture<EscobasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EscobasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EscobasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
