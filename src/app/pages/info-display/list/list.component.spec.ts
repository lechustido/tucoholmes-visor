import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoDisplayListComponent } from './list.component';

describe('InfoDisplayListComponent', () => {
  let component: InfoDisplayListComponent;
  let fixture: ComponentFixture<InfoDisplayListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoDisplayListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoDisplayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
