import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRestInfoComponent } from './show-rest-info.component';

describe('ShowRestInfoComponent', () => {
  let component: ShowRestInfoComponent;
  let fixture: ComponentFixture<ShowRestInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowRestInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowRestInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
