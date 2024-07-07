import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainGoodsComponent } from './main-goods.component';

describe('MainGoodsComponent', () => {
  let component: MainGoodsComponent;
  let fixture: ComponentFixture<MainGoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainGoodsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainGoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
