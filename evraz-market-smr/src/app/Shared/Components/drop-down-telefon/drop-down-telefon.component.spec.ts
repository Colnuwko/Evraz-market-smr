import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDownTelefonComponent } from './drop-down-telefon.component';

describe('DropDownTelefonComponent', () => {
  let component: DropDownTelefonComponent;
  let fixture: ComponentFixture<DropDownTelefonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropDownTelefonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DropDownTelefonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
